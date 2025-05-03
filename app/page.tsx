/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-indigo-900 mb-6">
            React 19 New Features
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore the latest capabilities in React 19 through interactive
            examples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            href="/compiler"
            title="Compiler"
            description="Experience the new React compiler that optimizes your code automatically."
          />

          <FeatureCard
            href="/usetransaction"
            title="useTransaction"
            description="Manage state transitions smoothly with the useTransaction hook."
          />
          <FeatureCard
            href="/useactionstate"
            title="useActionState"
            description="Handle form actions with built-in loading states and results."
          />
          <FeatureCard
            href="/useformstatus"
            title="useFormStatus"
            description="Track form submission status with this dedicated React hook."
          />
          <FeatureCard
            href="/useoptimistic"
            title="useOptimistic"
            description="Create optimistic UI updates while waiting for operations to complete."
          />
          <FeatureCard
            href="/servercomponent"
            title="Server Component"
            description="Learn how server components can improve performance and user experience."
          />
          <FeatureCard
            href="/use"
            title="use"
            description="Learn how to use the latest features in React 19."
          />
          <FeatureCard
            href="/others"
            title="Others"
            description="Discover other new features in React 19."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ href, title, description }: any) {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 h-full border border-indigo-100 hover:border-indigo-300 group">
        <h2 className="text-xl font-semibold text-indigo-800 mb-3 group-hover:text-indigo-600">
          {title}
        </h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-indigo-500 font-medium flex items-center group-hover:text-indigo-700">
          Explore
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
