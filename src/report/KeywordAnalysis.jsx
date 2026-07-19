import React from "react";
import { VscSymbolKeyword } from "react-icons/vsc";
import Tag from "./shared/Tag";
import { FiCheckCircle } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { PiWarningCircleFill } from "react-icons/pi";

const KeywordAnalysis = ({ keywordAnalysis }) => {
  const { matched, missing } = keywordAnalysis;
  return (
    <div className="bg-white/5 border border-white/15 p-6 mb-6 rounded-2xl">
      <div className="flex items-center gap-2 mb-2 ">
        <span className="bg-blue-50 rounded w-8 h-8 flex items-center justify-center text-violet-500">
          <VscSymbolKeyword size={16} />
        </span>
        <h2 className="text-white font-semibold">Keyword Analysis</h2>
      </div>
      <div className="m-2 mt-5">
        <p className="text-sm font-medium text-emerald-600 mb-2">
          Matched Keywords
        </p>
        <div className="flex gap-2 overflow-hidden flex-wrap">
          {matched.map((item) => {
            return (
              <Tag key={item} variant="matched">
                <div className="flex items-center gap-1">
                  <span>
                    <FiCheckCircle />
                  </span>
                  {item}
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
      <div className="m-2">
        <p className="text-sm font-medium text-red-600 mb-2">
          Missing Keywords
        </p>
        <div className="flex gap-2 overflow-hidden flex-wrap">
          {missing.map((item) => {
            return (
              <Tag key={item} variant="missing">
                 <div className="flex items-center gap-1">
                  <span>
                    <RxCrossCircled />
                  </span>
                  {item}
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
      <div className="m-2">
        <p className="text-sm font-medium text-yellow-600 mb-2">
          ATS Keywords to Add
        </p>
        <div className="flex gap-2 overflow-hidden flex-wrap">
          {missing.map((item) => {
            return (
              <Tag key={item} variant="toAdd">
                 <div className="flex items-center gap-1">
                  <span>
                    <PiWarningCircleFill />
                  </span>
                  {item}
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KeywordAnalysis;
