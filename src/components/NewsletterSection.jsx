import { NewsletterForm } from '../components/NewsletterForm';

export const NewsletterSection = () => {
  return (
    <section className="max-w-4xl mx-auto my-16 px-6">
      <div className="bg-indigo-50 rounded-3xl p-4 md:p-8 border border-indigo-100 shadow-sm flex flex-col items-center gap-8">
        <div className="w-full md:w-auto min-w-75">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
