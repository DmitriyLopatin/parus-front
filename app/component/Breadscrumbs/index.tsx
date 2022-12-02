import React from "react";
import Link from "../../../node_modules/next/link";

type Props = {
  breadscrumb: {
    breadscrumb1: {
      title: string;
      link: string;
      current?: boolean;
    };
    breadscrumb2?: {
      title: string;
      link?: string;
      current?: boolean;
    };
    breadscrumb3?: {
      title: string;
      link?: string;
      current?: boolean;
    };
  };
};

const BreadScrumbs: React.FC<Props> = ({ breadscrumb }) => {
  return (
    <div className="breadscrumbs">
      <ul>
        <li
          className={
            breadscrumb.breadscrumb1.current ? "breadscrumbs--current" : ""
          }
        >
          <Link href={breadscrumb.breadscrumb1.link}>
            {breadscrumb.breadscrumb1.title}
          </Link>
        </li>
        {breadscrumb.breadscrumb2 && (
          <li
            className={
              breadscrumb.breadscrumb2.current ? "breadscrumbs--current" : ""
            }
          >
            {breadscrumb.breadscrumb2.current ? (
              breadscrumb.breadscrumb2.title
            ) : (
              <Link href={breadscrumb.breadscrumb2.link ?? ''}>
                {breadscrumb.breadscrumb2.title}
              </Link>
            )}
          </li>
        )}
        {breadscrumb.breadscrumb3 && (
          <li
            className={
              breadscrumb.breadscrumb3.current ? "breadscrumbs--current" : ""
            }
          >
            {breadscrumb.breadscrumb3.current ? (
              breadscrumb.breadscrumb3.title
            ) : (
              <Link href={breadscrumb.breadscrumb3.link ?? ''}>
                {breadscrumb.breadscrumb3.title}
              </Link>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

export default BreadScrumbs;
