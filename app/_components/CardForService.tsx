import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface servicesItems {
  imageSrc: string;
  title: string;
  desc: string;
}

const CardForService = ({ desc, imageSrc, title }: servicesItems) => {
  return (
    <Card className="w-[350px] lg:max-h-[200px]">
      <CardContent className="flex flex-col justify-center items-center gap-y-4">
        <div className="flex flex-col items-center text-center py-4">
          <Image src={imageSrc} alt="Services" width={40} height={40} />
          <h2 className="text-lg font-semibold mt-2">{title}</h2>
          <p className="text-sm text-gray-600 mt-3">{desc}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardForService;
