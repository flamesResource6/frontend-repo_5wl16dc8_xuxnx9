import { Activity, Utensils, FileText, Brain, Stethoscope } from 'lucide-react';

const tips = [
  {
    icon: Activity,
    title: 'Fitness',
    text: 'Aim for 150–300 minutes of moderate cardio weekly + 2–3 strength sessions. Progressively overload and prioritize compound lifts.'
  },
  {
    icon: Utensils,
    title: 'Diet',
    text: 'Build plates with 40% veggies, 30% lean protein, 20% smart carbs, 10% healthy fats. Hydrate ~30–35 ml/kg/day.'
  },
  {
    icon: Stethoscope,
    title: 'Tongue Health',
    text: 'Pink with thin white coat is typical. Thick coating, discoloration, or sores may indicate hydration, nutrition, or oral hygiene issues.'
  },
  {
    icon: FileText,
    title: 'Records',
    text: 'Keep a simple log of symptoms, meds, labs, and vitals. Trend over time to discuss with your clinician.'
  },
  {
    icon: Brain,
    title: 'Wellness',
    text: 'Sleep 7–9h, daylight exposure, manage stress, and move frequently. Consistency beats intensity.'
  }
];

export default function WellnessSidebar() {
  return (
    <aside className="hidden lg:block w-80 shrink-0">
      <div className="sticky top-20 space-y-3">
        {tips.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900">
            <div className="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-400">
              <Icon size={18} />
              <h3 className="font-medium">{title}</h3>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{text}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}
