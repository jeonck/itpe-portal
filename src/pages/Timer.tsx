import { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Clock, FileText, AlertCircle } from 'lucide-react';
import type { TimerMode } from '../types';

export default function Timer() {
  const [mode, setMode] = useState<TimerMode>('short');
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const durations: Record<TimerMode, number> = {
    short: 10 * 60, // 10 minutes for 1교시
    long: 25 * 60, // 25 minutes for 2~4교시
  };

  const labels: Record<TimerMode, string> = {
    short: '1교시 용어형',
    long: '2~4교시 논술형',
  };

  // Timer logic
  useEffect(() => {
    let interval: number | undefined;

    if (isRunning && !isPaused && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1));
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, isPaused, timeLeft]);

  // Play notification sound when timer ends
  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      // You could add an audio notification here
      alert('시간이 종료되었습니다!');
    }
  }, [timeLeft, isRunning]);

  const handleStart = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      setIsPaused(false);
    } else {
      setIsPaused(!isPaused);
    }
  }, [isRunning, isPaused]);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(durations[mode]);
  }, [mode, durations]);

  const handleModeChange = useCallback(
    (newMode: TimerMode) => {
      setMode(newMode);
      setTimeLeft(durations[newMode]);
      setIsRunning(false);
      setIsPaused(false);
    },
    [durations]
  );

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((durations[mode] - timeLeft) / durations[mode]) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">답안 작성 타이머</h1>
        <p className="text-gray-600">실전과 동일한 조건에서 시간 관리 연습을 하세요.</p>
      </div>

      {/* Mode Selection */}
      <div className="grid md:grid-cols-2 gap-4">
        <button
          onClick={() => handleModeChange('short')}
          className={`card text-left transition-all ${
            mode === 'short'
              ? 'ring-2 ring-primary-500 bg-primary-50'
              : 'hover:shadow-lg'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <FileText className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">10분 - 1교시 용어형</h3>
              <p className="text-sm text-gray-600">
                13문제 중 10문제 선택, 각 1페이지 작성
              </p>
            </div>
            {mode === 'short' && (
              <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
            )}
          </div>
        </button>

        <button
          onClick={() => handleModeChange('long')}
          className={`card text-left transition-all ${
            mode === 'long'
              ? 'ring-2 ring-primary-500 bg-primary-50'
              : 'hover:shadow-lg'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
              <FileText className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">25분 - 2~4교시 논술형</h3>
              <p className="text-sm text-gray-600">
                6문제 중 4문제 선택, 각 3~4페이지 작성
              </p>
            </div>
            {mode === 'long' && (
              <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
            )}
          </div>
        </button>
      </div>

      {/* Timer Display */}
      <div className="card">
        <div className="text-center space-y-6">
          {/* Current Mode */}
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
            <Clock className="w-4 h-4" />
            {labels[mode]}
          </div>

          {/* Time Display */}
          <div className="relative">
            <div className="text-8xl font-bold text-gray-900 font-mono">
              {formatTime(timeLeft)}
            </div>
            <div className="mt-4 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ${
                  timeLeft === 0 ? 'bg-red-600' : 'bg-primary-600'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleStart}
              className={`flex items-center gap-2 px-8 py-4 rounded-lg text-white font-medium transition-colors ${
                isRunning && !isPaused
                  ? 'bg-yellow-600 hover:bg-yellow-700'
                  : 'bg-primary-600 hover:bg-primary-700'
              }`}
            >
              {isRunning && !isPaused ? (
                <>
                  <Pause className="w-5 h-5" />
                  일시정지
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  {isPaused ? '재개' : '시작'}
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-8 py-4 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-800 font-medium transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              초기화
            </button>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card bg-blue-50 border border-blue-200">
          <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            1교시 작성 팁
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <span>핵심 키워드 위주로 간결하게 작성</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <span>정의 + 특징 3~4가지 + 간단한 예시</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <span>1문제당 약 10분, 총 100분 안에 완성</span>
            </li>
          </ul>
        </div>

        <div className="card bg-purple-50 border border-purple-200">
          <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
            <AlertCircle className="w-5 h-5 text-purple-600" />
            2~4교시 작성 팁
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
              <span>서론-본론-결론 구조로 논리적 전개</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
              <span>구성도와 도표 활용으로 가독성 향상</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
              <span>1문제당 약 25분, 총 100분 안에 완성</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Practice Advice */}
      <div className="card bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
        <h3 className="text-lg font-bold text-gray-900 mb-3">효과적인 연습 방법</h3>
        <div className="space-y-2 text-gray-700">
          <p className="text-sm">
            실전과 동일한 조건에서 연습하는 것이 가장 중요합니다. 타이머를 시작하면 실제 시험처럼 손으로 직접 작성하세요.
          </p>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
              <span>매일 최소 1~2문제씩 꾸준히 연습</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
              <span>시간 내에 완성하지 못하더라도 포기하지 말고 끝까지 작성</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
              <span>작성 후 다시 읽어보며 개선점 파악</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
