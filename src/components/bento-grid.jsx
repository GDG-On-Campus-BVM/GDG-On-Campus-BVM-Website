/* eslint-disable react/prop-types */
import {cn} from '../lib/utils';

export const BentoGrid = ({className, children}) => {
  return (
      <div
          className={cn(
              'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto',
              className,
          )}
      >
        {children}
      </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  socialMedia,
}) => {
  return (
      <div
          className={cn(
              'row-span-1 w-full rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col h-full',
              className,
          )}
      >
        <div
            className="relative w-full aspect-[4/5] overflow-hidden rounded-md mb-4">
          {header && (
              <img
                  src={header}
                  alt={title}
                  className="w-full h-full object-cover object-top"
              />
          )}
        </div>
        <div
            className="group-hover/bento:translate-x-2 transition duration-200 flex-grow">
          <div
              className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2">
            {title}
          </div>
          <div
              className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300 flex">
            {icon} {description}
          </div>
        </div>
        <div className="mt-4">
          {socialMedia}
        </div>
      </div>
  );
};