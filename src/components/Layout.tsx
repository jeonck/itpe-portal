import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Map, Network, Timer as TimerIcon, Home, FileText, TrendingUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '홈', icon: Home },
    { path: '/topics', label: '토픽 위키', icon: BookOpen },
    { path: '/roadmap', label: '학습 로드맵', icon: Map },
    { path: '/mindmap', label: '마인드맵', icon: Network },
    { path: '/answer-examples', label: '답안 예시', icon: FileText },
    { path: '/exam-trends', label: '출제 경향', icon: TrendingUp },
    { path: '/timer', label: '타이머', icon: TimerIcon },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-primary-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">기술사 학습 포털</h1>
                <p className="text-sm text-gray-600">정보관리 & 컴퓨터시스템응용</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-1">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === path
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden mt-4 flex gap-1 overflow-x-auto">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  location.pathname === path
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 mt-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm">
              기술사 학습 포털 - 정보관리기술사 & 컴퓨터시스템응용기술사
            </p>
            <p className="text-xs mt-2 text-gray-500">
              체계적인 학습으로 기술사 합격을 향해
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
