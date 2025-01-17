export const Footer = () => (
  <footer className="bg-gray-50 py-10">
    <div className="max-w-7xl mx-auto px-4">
      {/* Upper Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Left Section */}
        <div>
          <img
            src="/hyperhire-logo2.png"
            alt="Logo"
            className="h-8 pb-4 md:mb-0"
          />
          <p className="text-sm text-gray-700">
            우리는 국가의 경계를 넘어 최고의 인재를 매칭해드립니다.
          </p>
          <p className="text-sm text-gray-700">010-0000-0000</p>
          <p className="text-sm text-gray-700">aaaaa@naver.com</p>
        </div>

        {/* Center Section */}
        <div className="mt-8 md:mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "해외 개발자 원격 채용", link: "바로가기" },
              { title: "외국인 원격 채용 (비개발)", link: "바로가기" },
              { title: "한국어 가능 외국인 채용", link: "바로가기" },
              { title: "해외 개발자 활용 서비스", link: "바로가기" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#EFF1F6] mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-[#7A8FAD]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v-9a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12h18m-9 4.5c.795 0 1.5-.705 1.5-1.5S12.795 12 12 12s-1.5.705-1.5 1.5.705 1.5 1.5 1.5z"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-800 text-sm font-bold mb-2">
                  {item.title}
                </h4>
                <button className="text-gray-400 text-sm font-bold flex items-center">
                  {item.link}
                  <span className="ml-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.59669 2.91675C4.36085 2.91675 2.91669 4.27925 2.91669 6.38758V13.6117C2.91669 15.7201 4.36085 17.0834 6.59669 17.0834H13.4034C15.6392 17.0834 17.0834 15.7201 17.0834 13.6117V6.38758C17.0834 4.27925 15.6392 2.91675 13.4034 2.91675H6.59669ZM13.4034 18.3334H6.59669C3.64835 18.3334 1.66669 16.4359 1.66669 13.6117V6.38758C1.66669 3.56341 3.64835 1.66675 6.59669 1.66675H13.4034C16.3517 1.66675 18.3334 3.56341 18.3334 6.38758V13.6117C18.3334 16.4359 16.3517 18.3334 13.4034 18.3334Z"
                        fill="#5E626F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.4049 10.625H6.59491C6.24991 10.625 5.96991 10.345 5.96991 10C5.96991 9.655 6.24991 9.375 6.59491 9.375H13.4049C13.7499 9.375 14.0299 9.655 14.0299 10C14.0299 10.345 13.7499 10.625 13.4049 10.625Z"
                        fill="#5E626F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.2686 13.7484C10.1086 13.7484 9.94775 13.6876 9.82608 13.5642C9.58275 13.3192 9.58358 12.9242 9.82775 12.6809L12.5194 10.0001L9.82775 7.31925C9.58358 7.07591 9.58275 6.68091 9.82608 6.43591C10.0694 6.19091 10.4644 6.19091 10.7094 6.43425L13.8461 9.55758C13.9644 9.67425 14.0303 9.83425 14.0303 10.0001C14.0303 10.1659 13.9644 10.3259 13.8461 10.4426L10.7094 13.5659C10.5878 13.6876 10.4278 13.7484 10.2686 13.7484Z"
                        fill="#5E626F"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-300 pt-4">
        <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-600">
          <div className="mb-4 md:mb-0">
            <p>상호명: 하이퍼하이어 | 대표 CEO: 김주현</p>
            <p>사업자등록번호 CIN: 427-86-01187</p>
            <p>
              주소 ADDRESS: 서울특별시 강남대로 479, 지하 1층 238호 | D-138,
              Street number 11, Jagjeet Nagar, North East Delhi, 110053 India
            </p>
          </div>
          <div className="text-right">
            <p>© 2023 Hyperhire</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
