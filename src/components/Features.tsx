import { Feature } from './Feature';

const features = [
  {
    title: 'AI-Powered Insights',
    description:
      'Leverage the power of AI to analyze your performance. Get actionable recommendations to improve content engagement effortlessly.',
  },
  {
    title: 'Custom Goal Tracking',
    description:
      'Set, monitor, and achieve your targets with ease. Break down complex objectives into manageable tasks to stay on track.',
  },
  {
    title: 'Data Security First',
    description:
      'Your data is protected with robust encryption, ensuring privacy and safeguarding your insights from unauthorized access.',
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24" id='features'>
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
          Simplify your workflow with powerful tools designed to boost efficiency. 
          Gain insights, stay organized, and achieve your goals—all in one platform.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description }) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
