
export default function Card({ title, content }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  );
}
