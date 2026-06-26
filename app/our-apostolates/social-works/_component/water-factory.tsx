import { Card } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const images = [
  '/water-1.jpg',
  '/water-2.jpg',
  '/water-3.jpg',
  '/water-4.jpg',
  '/water-5.jpg',
  '/water-6.jpg',
];
export const WaterFactory = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Human Rights Intervention */}

      {images.map((image) => (
        <motion.div variants={itemVariants} key={image}>
          <Card className="bg-linear-to-br  from-card to-primary/5 border-primary/20 h-full hover:border-primary/40 transition-all duration-300 overflow-hidden group">
            <div className="h-1 bg-linear-to-br from-primary to-primary/50 group-hover:from-primary group-hover:to-transparent transition-all" />
            <div className="p-8 space-y-4 sm:h-[400px]">
              <img
                src={image}
                alt={image}
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
