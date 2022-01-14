import Image from "next/image";

interface Props {
  author: string;
  authorRole: string;
  customer: string;
  imageAuthor: StaticImageData;
  imageCustomer?: StaticImageData;
  text: string;
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
    <div className="py-12">
      {imageCustomer && (
        <div className="mb-6">
          <Image src={imageCustomer} alt={customer} />
        </div>
      )}
      <blockquote>
        <p>{text}</p>
        <footer className="mt-8">
          <div className="flex items-start">
            <div className="flex flex-shrink-0 rounded-full border-2 border-gray-400">
              <Image
                className="rounded-full"
                height={48}
                width={48}
                src={imageAuthor}
                alt={author}
              />
            </div>
            <div className="ml-4">
              <div>{author}</div>
              <div>{authorRole}</div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}
