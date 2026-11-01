export default function SkillCard({ nama, level }) {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-utama">{nama}</h3>
            <p className="mt-1 text-xs text-gray-600">Level: {level}</p>
        </div>
    );
}