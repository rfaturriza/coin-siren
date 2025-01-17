interface CardProps {
  name: string;
}

export const Card = ({ name }: CardProps) => (
  <div className="bg-white rounded-2xl p-8 w-full h-full">
    <div className="flex justify-center relative">
      <div className="w-24 h-24 rounded-full bg-gray-200 flex justify-center items-center relative">
        <img src="/ava.png" alt="Profile Picture" className="rounded-full" />
        <div className="absolute bottom-0 right-0">
          <img
            src="/flag.png"
            alt="Flag"
            className="rounded-full w-8 h-8 border-2 border-white"
          />
        </div>
      </div>
    </div>
    <div className="text-center mt-4">
      <h2 className="text-3xl font-black text-gray-900">{name}</h2>
      <p className="text-gray-500 text-sm">
        <a href="#" className="text-blue-500 hover:underline">
          마케팅
          <span className="font-bold"> ·2y+ </span>
        </a>
      </p>
    </div>
    <div className="flex justify-center mt-6">
      <button className="hover:bg-gray-100 text-sm text-gray-700 font-bold py-1 px-2 rounded-md border border-[#C1C5CF] focus:outline-none focus:shadow-outline">
        마케팅 콘텐츠 제작
      </button>
    </div>
    <div className="flex justify-center mt-2">
      <button className="hover:bg-gray-100 text-sm text-gray-700 font-bold py-1 px-2 rounded-md border border-[#C1C5CF] focus:outline-none focus:shadow-outline">
        인스타그램 관리
      </button>
    </div>
    <div className="flex justify-center mt-2 gap-1">
      <button className="hover:bg-gray-100 text-sm text-gray-700 font-bold py-1 px-2 rounded-md border border-[#C1C5CF] focus:outline-none focus:shadow-outline">
        트위터 관리
      </button>
      <button className="hover:bg-gray-100 text-sm text-gray-700 font-bold py-1 px-2 rounded-md border border-[#C1C5CF] focus:outline-none focus:shadow-outline">
        블로그 글 작성
      </button>
    </div>
  </div>
);
