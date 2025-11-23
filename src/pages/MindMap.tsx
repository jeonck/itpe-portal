import { useMemo, useState } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
  ConnectionMode,
  type Node,
  type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Filter } from 'lucide-react';
import topicsData from '../data/topics.json';
import type { Topic, DomainCategory } from '../types';

export default function MindMap() {
  const topics = topicsData as Topic[];
  const [selectedCategory, setSelectedCategory] = useState<DomainCategory | 'all'>('all');

  const categories: { value: DomainCategory | 'all'; label: string; color: string }[] = [
    { value: 'all', label: '전체', color: '#3b82f6' },
    { value: 'fundamental', label: '공통 필수', color: '#3b82f6' },
    { value: 'management-focus', label: '정보관리 집중', color: '#10b981' },
    { value: 'technical-focus', label: '컴퓨터시스템 집중', color: '#a855f7' },
    { value: 'digital-service', label: '최신 트렌드', color: '#f97316' },
  ];

  const getCategoryColor = (category: DomainCategory) => {
    return categories.find((c) => c.value === category)?.color || '#6b7280';
  };

  // Filter topics based on selected category
  const filteredTopics = useMemo(() => {
    if (selectedCategory === 'all') return topics;
    return topics.filter((t) => t.category === selectedCategory);
  }, [topics, selectedCategory]);

  // Create nodes and edges from topics
  const { initialNodes, initialEdges } = useMemo(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    // Group topics by subcategory
    const subcategories = new Map<string, Topic[]>();
    filteredTopics.forEach((topic) => {
      const key = `${topic.category}-${topic.subcategory}`;
      if (!subcategories.has(key)) {
        subcategories.set(key, []);
      }
      subcategories.get(key)!.push(topic);
    });

    let yOffset = 0;
    let nodeId = 0;

    // Create category nodes and topic nodes
    subcategories.forEach((topicsInSubcat) => {
      const topic = topicsInSubcat[0];
      const categoryColor = getCategoryColor(topic.category);

      // Create subcategory node
      const subcatNodeId = `subcat-${nodeId++}`;
      nodes.push({
        id: subcatNodeId,
        type: 'default',
        position: { x: 0, y: yOffset },
        data: {
          label: topic.subcategory,
        },
        style: {
          background: categoryColor,
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '12px 24px',
          fontWeight: 'bold',
          fontSize: '14px',
        },
      });

      // Create topic nodes
      topicsInSubcat.forEach((t, index) => {
        const topicNodeId = `topic-${t.id}`;
        const xPos = 300 + (index % 3) * 250;
        const yPos = yOffset + Math.floor(index / 3) * 100;

        nodes.push({
          id: topicNodeId,
          type: 'default',
          position: { x: xPos, y: yPos },
          data: {
            label: t.title,
          },
          style: {
            background: 'white',
            border: `2px solid ${categoryColor}`,
            borderRadius: '8px',
            padding: '8px 16px',
            fontSize: '12px',
          },
        });

        // Create edge from subcategory to topic
        edges.push({
          id: `${subcatNodeId}-${topicNodeId}`,
          source: subcatNodeId,
          target: topicNodeId,
          type: 'smoothstep',
          style: { stroke: categoryColor, strokeWidth: 2 },
        });

        // Create edges for related topics
        t.relatedTopics.forEach((relatedId) => {
          const relatedNodeId = `topic-${relatedId}`;
          // Only create edge if related topic is in filtered set
          if (filteredTopics.some((ft) => ft.id === relatedId)) {
            edges.push({
              id: `${topicNodeId}-${relatedNodeId}`,
              source: topicNodeId,
              target: relatedNodeId,
              type: 'default',
              style: { stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '5,5' },
              animated: false,
            });
          }
        });
      });

      yOffset += Math.ceil(topicsInSubcat.length / 3) * 100 + 100;
    });

    return { initialNodes: nodes, initialEdges: edges };
  }, [filteredTopics]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Update nodes and edges when filtered topics change
  useMemo(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  return (
    <div className="space-y-4 h-[calc(100vh-12rem)]">
      {/* Header */}
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">마인드맵</h1>
          <p className="text-gray-600">토픽 간의 연결을 시각화하여 전체 구조를 파악하세요.</p>
        </div>

        {/* Category Filter */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Filter className="w-4 h-4" />
            카테고리 선택
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat.value
                    ? 'ring-2 ring-offset-2'
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: selectedCategory === cat.value ? cat.color : '#f3f4f6',
                  color: selectedCategory === cat.value ? 'white' : '#374151',
                  borderColor: cat.color,
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="card bg-blue-50 border border-blue-200">
          <div className="flex items-center gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-blue-600 rounded" />
              <span>카테고리</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-blue-600" />
              <span>계층 관계</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gray-400" style={{ borderTop: '1px dashed' }} />
              <span>연관 관계</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mind Map */}
      <div className="card p-0 overflow-hidden" style={{ height: 'calc(100% - 16rem)' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          connectionMode={ConnectionMode.Loose}
          fitView
          attributionPosition="bottom-left"
        >
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
