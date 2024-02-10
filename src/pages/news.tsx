import Navbar from '@components/explore/explore-navbar';

export default function News() {
  return (
    <div>
      <Navbar
        sections={[
          { name: 'For You', href: '/' },
          { name: 'News', href: '/news' },
          { name: 'Entertainment', href: '/entertainment' },
        ]}
      />
      <h1 className="text-4xl font-bold text-gray-800 mt-8">News Page</h1>
    </div>
  );
}
