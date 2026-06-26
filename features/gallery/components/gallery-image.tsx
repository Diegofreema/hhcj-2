import { url } from '@/lib/constants/constants';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  item: any;
  index: number;
};

export const GalleryImage = ({ item, index }: Props) => {
  return (
    <motion.div
      key={item._id}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative h-48 md:h-64 rounded-lg overflow-hidden cursor-pointer"
    >
      <Image
        src={`${url}${item.url}` || '/placeholder.svg'}
        alt={item.altText || item.filename}
        fill
        className="object-contain group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p className="text-white font-semibold line-clamp-1">
          {item.altText || 'View Image'}
        </p>
      </div>
    </motion.div>
  );
};
