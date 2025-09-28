function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-sm text-gray-600 mb-8">页面未找到</p>
      <a
        href="/"
        className="text-pink px-6 py-3 rounded-lg transition-colors text-bg-500"
      >
        返回首页
      </a>
    </div>
  );
}

export default NotFound;
