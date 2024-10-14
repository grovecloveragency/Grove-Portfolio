import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { client, urlFor } from "@/app/lib/sanity";
import { simpleBlogCard } from "@/app/lib/interface";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-x-8 gap-y-10 p-8">
      {data.map((post, idx) => (
        <Card
          key={idx}
          className="w-full h-[400px] flex flex-col justify-between rounded-lg overflow-hidden shadow-lg border border-black"
        >
          <Image
            src={urlFor(post.titleImage).url()}
            alt="image"
            width={500}
            height={500}
            className="rounded-t-lg w-full h-[200px] object-cover"
          />

          <CardContent className="p-5 flex flex-col justify-between flex-1">
            <h3 className="text-lg lg:line-clamp-1 line-clamp-2 font-bold">
              {post.title}
            </h3>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300 text-center">
              {post.smallDescription}
            </p>
            <Button asChild className="w-full lg:mt-auto mt-5">
              <Link href={`/blogs/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
