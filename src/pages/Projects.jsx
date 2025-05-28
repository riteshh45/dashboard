
import Card from '../components/Card';

export default function Projects() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Projects</h2>
      <Card title="Project A" content="Details about project A..." />
      <Card title="Project B" content="Details about project B..." />
      <Card title="Project C" content="Details about project C..." />
      <Card title="Project D" content="Details about project D..." />
      <Card title="Project E" content="Details about project E..." />
    </div>
  );
}
