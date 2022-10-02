/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo, useState } from "react";
import Pagination from "../../../shares/components/pagination/Pagination";
import { HeaderTitle } from "../../../shares/components/title/HeaderTitle";
import { data } from "../../../utils/data";
import ListFaqs from "../feature/ListFaqs";
let PageSize = 4;

function FAQs() {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.faqs.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const List = () => {
    return (
      <div className="">
        {currentTableData.map((infos) => (
          <ListFaqs key={infos.id} {...infos} />
        ))}
      </div>
    );
  };
  return (
    <div className="faqs">
      <div className="faqs_text ">
        <div className="container mx-auto">
          <div className="relative pt-10 ">
            <div className="mt-5 grid mx-auto justify-center">
              <HeaderTitle title={"FAQs"}></HeaderTitle>
            </div>
            <div className="text-center mt-5 mb-5 ">
              <List></List>
            </div>
            <div className=" mt-5 text-center flex">
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.faqs.length}
                pageSize={PageSize}
                onPageChange={(page: any) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
