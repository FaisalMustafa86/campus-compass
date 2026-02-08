import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

const StatCard = ({ value, label, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">
        {value}
      </div>
      <div className="text-sm text-primary-foreground/70 font-medium">{label}</div>
    </motion.div>
  );
};

export default StatCard;
