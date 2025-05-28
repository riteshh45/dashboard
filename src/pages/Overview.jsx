
import Card from '../components/Card';

export default function Overview() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Overview</h2>
      <Card title="Welcome" content="This is a brief introduction to my portfolio dashboard." />
    </div>
  );
}
