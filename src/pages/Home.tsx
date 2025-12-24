import { Link } from 'react-router-dom';
import { Ear, Lightbulb, NotebookPen } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "HackLLM",
        desc: "OWASP LLM Top 10 기반의 LLM 보안 위협 학습 및 실습 플랫폼",
        period: "2024.05 ~ 2024.07",
        tags: ["OpenAI API", "Streamlit", "Supabase", "pgvector"]
    },
    {
        id: 2,
        title: "Depth-Anything 경량화 및 최적화 연구",
        desc: "모빌리티 환경 적용을 위한 Vision AI 모델 경량화 및 추론 최적화 연구",
        period: "2025.03 ~ 2025.06",
        tags: ["Model Optimization", "TensorRT", "Quantization", "PyTorch"]
    },
    {
        id: 3,
        title: "JobTalk(잡톡)",
        desc: "AI 기반 진로 로드맵 설계 솔루션",
        period: "2025.08 ~ 2025.12",
        tags: ["React", "Node.js", "MariaDB", "OpenAI API"]
    },
    {
        id: 4,
        title: "Qureka(큐레카)",
        desc: "AI 기반 디지털 교육자료 요약, 문제 생성 웹서비스",
        period: "2025.03 ~ 2025.12",
        tags: ["React", "Node.js", "Supabase", "FastAPI", "OpenAI API"]
    }
];

function Home() {
    return (
        <div className="pt-20">
            {/* 1. Hero Section */}
            <section id="hero" className="min-h-screen flex items-center justify-center px-6 scroll-mt-20">
                <div className="text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
                        안전한 AI를 만드는<br />
                        <span className="text-primary">개발자, 임희진입니다.</span>
                    </h2>
                    <p className="text-xl text-slate-500 mb-12">
                        AI의 보안 위협을 방어하고, 견고한 서비스 환경을 구축합니다.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="#projects" className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-blue-600 transition-colors">
                            Projects
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-full font-bold hover:bg-slate-50 transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. About Me */}
            <section id="about" className="py-20 px-6 bg-slate-50 scroll-mt-20">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold mb-12 flex items-center text-slate-900">
                        <span className="w-2 h-8 bg-primary mr-4 rounded-sm"></span>
                        About Me
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                            <Ear className="w-10 h-10 mb-4 text-slate-900" strokeWidth={1.5} />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">불편함을 해결하는 경험</h3>
                            <p className="text-slate-600 leading-relaxed">
                                사용자의 불편함을 바탕으로 기술적 해결책을 제시합니다. 피드백을 기능 개선과 성능 고도화로 연결하여 편의를 극대화합니다.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                            <Lightbulb className="w-10 h-10 mb-4 text-slate-900" strokeWidth={1.5} />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">비즈니스 가치 지향</h3>
                            <p className="text-slate-600 leading-relaxed">
                                단순 구현을 넘어 안전을 고민합니다. 보안 위협을 막는 선제적 대응을 통해 기술 부채를 최소화합니다.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                            <NotebookPen className="w-10 h-10 mb-4 text-slate-900" strokeWidth={1.5} />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">기록과 공유</h3>
                            <p className="text-slate-600 leading-relaxed">
                                개발 과정의 정보를 정량적 데이터로 남깁니다. 실험 결과와 진행 상황을 체계적으로 공유하여 팀의 문제 해결 속도를 높입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Experience & Education */}
            <section id="experience" className="py-20 px-6 scroll-mt-20">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold mb-12 flex items-center text-slate-900">
                        <span className="w-2 h-8 bg-secondary mr-4 rounded-sm"></span>
                        Experience & Education
                    </h2>

                    <div className="relative border-l-2 border-slate-200 ml-3 space-y-12">
                        {/* Education */}
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-primary"></div>
                            <h3 className="text-xl font-bold text-slate-900">Education</h3>
                            <div className="mt-4 space-y-6">
                                <div>
                                    <span className="text-sm text-slate-500 font-bold">2025.03 ~ 2025.09 (6개월)</span>
                                    <h4 className="text-lg font-bold text-slate-800">KITRI 차세대 보안리더 양성 프로그램 (WhiteHat School 3기)</h4>
                                    <p className="text-slate-600">정보보안 전문가 양성 트랙</p>
                                </div>
                                <div>
                                    <span className="text-sm text-slate-500 font-bold">2024.03 ~ 2026.02</span>
                                    <h4 className="text-lg font-bold text-slate-800">DSC 지역혁신플랫폼 (대전·세종·충남)</h4>
                                    <p className="text-slate-600">모빌리티SW/AI 융합전공 (복수전공)</p>
                                </div>
                                <div>
                                    <span className="text-sm text-slate-500 font-bold">2022.03 ~ 2026.02</span>
                                    <h4 className="text-lg font-bold text-slate-800">목원대학교</h4>
                                    <p className="text-slate-600">컴퓨터공학과 (주전공)</p>
                                </div>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-secondary"></div>
                            <h3 className="text-xl font-bold text-slate-900">Experience</h3>
                            <div className="mt-4 space-y-6">
                                <div>
                                    <span className="text-sm text-slate-500 font-bold">2024.11, 2025.11</span>
                                    <h4 className="text-lg font-bold text-slate-800">포트폴리오 페스타 2024, 2025</h4>
                                    <p className="text-slate-700 font-semibold mb-1">전시 참여 및 부스 운영</p>
                                    <p className="text-slate-600">
                                        프로젝트 큐레카(Qureka), 잡톡(JobTalk)
                                    </p>
                                </div>
                                <div>
                                    <span className="text-sm text-slate-500 font-bold">2025.11</span>
                                    <h4 className="text-lg font-bold text-slate-800">SW중심대학 인재 페스티벌</h4>
                                    <p className="text-slate-700 font-semibold mb-1">전시 참여 및 부스 운영</p>
                                    <p className="text-slate-600">
                                        프로젝트 잡톡(JobTalk)
                                    </p>
                                </div>
                                <div>
                                    <span className="text-sm text-slate-500 font-bold">2024.07 ~ 2024.08 (2개월)</span>
                                    <h4 className="text-lg font-bold text-slate-800">(주)에이직스 (AGICS)</h4>
                                    <p className="text-slate-700 font-semibold mb-1">하계 인턴십 (Summer Internship)</p>
                                    <p className="text-slate-600">
                                        시계열 예측 및 CNN 기반 이미지 분석 AI 모델 개발
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Projects Section */}
            <section id="projects" className="py-20 px-6 bg-slate-50 scroll-mt-20">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold mb-12 flex items-center text-slate-900">
                        <span className="w-2 h-8 bg-primary mr-4 rounded-sm"></span>
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <Link to={`/project/${project.id}`} key={project.id} className="group block bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                <div className="h-64 bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-200 transition-colors relative overflow-hidden">
                                    <img
                                        src={`/images/image_${project.id}_1.png`}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.nextElementSibling?.classList.remove('hidden');
                                            target.nextElementSibling?.classList.add('flex');
                                        }}
                                    />
                                    <div className="hidden w-full h-full items-center justify-center">
                                        <span className="text-lg font-medium">Project Thumbnail</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded whitespace-nowrap ml-4">{project.period}</span>
                                    </div>
                                    <p className="text-slate-600 mb-6 text-lg">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 text-sm rounded-md font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Awards & Certifications */}
            <section id="awards" className="py-20 px-6 scroll-mt-20">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold mb-12 flex items-center text-slate-900">
                        <span className="w-2 h-8 bg-emerald-500 mr-4 rounded-sm"></span>
                        Awards & Certifications
                    </h2>

                    <ul className="space-y-4 text-slate-600">
                        <li>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                <div>
                                    <strong className="text-slate-900">최우수상</strong>
                                    <span className="text-slate-400 mx-2">|</span>
                                    <span className="text-slate-700">2025학년도 공과대학 연합작품전시회</span>
                                </div>
                                <span className="text-sm text-slate-400 font-medium">2025.12</span>
                            </div>
                            <div className="text-sm text-slate-500 mt-1">잡톡(JobTalk) - AI 기반 진로 로드맵 설계 솔루션</div>
                        </li>
                        <li>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                <div>
                                    <strong className="text-slate-900">최우수상, 최우수상</strong>
                                    <span className="text-slate-400 mx-2">|</span>
                                    <span className="text-slate-700">제38회 컴퓨터공학과 학술제</span>
                                </div>
                                <span className="text-sm text-slate-400 font-medium">2025.12</span>
                            </div>
                            <div className="text-sm text-slate-500 mt-1">잡톡(JobTalk) - AI 기반 진로 로드맵 설계 솔루션</div>
                            <div className="text-sm text-slate-500">큐레카(Qureka) - AI 기반 디지털 교육자료 요약, 문제 생성 웹서비스</div>
                        </li>
                        <li>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                <div>
                                    <strong className="text-slate-900">우수상</strong>
                                    <span className="text-slate-400 mx-2">|</span>
                                    <span className="text-slate-700">SUMTECH Hackathon 2025</span>
                                </div>
                                <span className="text-sm text-slate-400 font-medium">2025.10</span>
                            </div>
                            <div className="text-sm text-slate-500 mt-1">스터디메이트(StudyMate) - AI 기반 교과 성취도 평가, 피드백 서비스</div>
                        </li>
                        <li>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                <div>
                                    <strong className="text-slate-900">대상</strong>
                                    <span className="text-slate-400 mx-2">|</span>
                                    <span className="text-slate-700">제3회 서구지역 대학생 미래동행 프로젝트</span>
                                </div>
                                <span className="text-sm text-slate-400 font-medium">2024.11</span>
                            </div>
                            <div className="text-sm text-slate-500 mt-1">하천살려유 - 갑천 현장 조사 및 개선 방안 도출</div>
                        </li>
                        <li>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                <div>
                                    <strong className="text-slate-900">우수상</strong>
                                    <span className="text-slate-400 mx-2">|</span>
                                    <span className="text-slate-700">제 1회 목원대학교 컴퓨터공학과 해커톤</span>
                                </div>
                                <span className="text-sm text-slate-400 font-medium">2024.11</span>
                            </div>
                            <div className="text-sm text-slate-500 mt-1">물론이조 - 공공 API를 활용한 기상 모니터링 및 LLM 비서</div>
                        </li>
                        <li>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                <div>
                                    <strong className="text-slate-900">특별상</strong>
                                    <span className="text-slate-400 mx-2">|</span>
                                    <span className="text-slate-700">2024 스타트업 코리아 투자위크 모의 IR</span>
                                </div>
                                <span className="text-sm text-slate-400 font-medium">2024.09</span>
                            </div>
                            <div className="text-sm text-slate-500 mt-1">대상이유력한 - RPM기반 페달 블랙박스</div>
                        </li>
                        <li>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                <div>
                                    <strong className="text-slate-900">특별상</strong>
                                    <span className="text-slate-400 mx-2">|</span>
                                    <span className="text-slate-700">2024 대공대전(대전 대학생 공공기술 창업 아이디어 경진대회)</span>
                                </div>
                                <span className="text-sm text-slate-400 font-medium">2024.06</span>
                            </div>
                            <div className="text-sm text-slate-500 mt-1">C팀 - 교통공해 및 안전사고 예방 표지판</div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 6. Contact Section */}
            <section id="contact" className="py-20 px-6 bg-slate-900 text-white scroll-mt-20">
                <div className="container mx-auto text-center max-w-3xl">
                    <h2 className="text-3xl font-bold mb-8">Contact</h2>
                    <p className="text-slate-400 mb-12">
                        아래 채널을 통해 연락주세요.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="mailto:hanataba227@gmail.com" className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex items-center">
                            <span>📧 Email</span>
                        </a>
                        <a href="https://github.com/hanataba227" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex items-center">
                            <span>🐙 GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/%ED%9D%AC%EC%A7%84-%EC%9E%84-872621378/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex items-center">
                            <span>💼 LinkedIn</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
