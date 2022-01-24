/* eslint-disable @next/next/no-img-element */
interface Props {
  author: string;
  authorRole: string;
  customer: string;
  imageAuthor: string;
  imageCustomer?: string;
  text: string | React.ReactNode;
}

export default function Testimonial({
  imageAuthor,
  imageCustomer,
  text,
  customer,
  author,
  authorRole,
}: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {imageCustomer && <img src={imageCustomer} alt={customer} />}
      <div className="p-6">
        <blockquote>
          <p className="before:content-['\201C'] after:content-['\201D']">
            {text}
          </p>
        </blockquote>
        <div className="mt-8">
          <div className="flex items-start">
            <div className="flex flex-shrink-0 rounded-full border-2 border-teal-500">
              <img
                className="rounded-full"
                height={48}
                width={48}
                src={imageAuthor}
                alt={author}
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium">{author}</div>
              <div className="text-sm">{authorRole}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
