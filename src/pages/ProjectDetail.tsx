import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Github, FileText, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface LinkItem {
    name: string;
    url: string;
    type: 'github' | 'paper' | 'external';
}

interface Project {
    title: string;
    summary: string;
    period: string;
    tags: string[];
    intro: string;
    team: string;
    contribution: string;
    description: string;
    result?: string;
    links?: LinkItem[];
    imageCount?: number;
}

// Mock data
const projectData: Record<number, Project> = {
    1: {
        title: "HackLLM",
        summary: "OWASP LLM Top 10 기반의 LLM 보안 위협 학습 및 실습 플랫폼",
        period: "2024.05 ~ 2024.07",
        tags: ["OpenAI API", "Streamlit", "Supabase", "pgvector"],
        links: [
            { name: "GitHub Repository", url: "https://github.com/hanataba227/HackLLM", type: "github" },
            { name: "Project Paper / PS2-8", url: "https://wisa.or.kr/program", type: "paper" }
        ],
        intro: "OWASP LLM Top 10의 취약점 시나리오를 바탕으로 제작된 실습형 CTF 플랫폼\n프롬프트 인젝션부터 벡터 검색 교란, 무제한 소비 등 LLM 취약점 10가지를 직접 체험하고 학습할 수 있음",
        team: `구성 : 기획 및 구현 8명
담당 역할 : 기획 및 웹 구현, DB 구축 및 개발, 배포 등 개발 총괄 (역할 기여도 100%, 전체 기여도 70%)`,
        description: `### 1. 프로젝트 배경
- LLM(Large Language Model)의 활용이 증가함에 따라 프롬프트 인젝션 등 새로운 보안 위협이 대두됨
- 기존 보안 교육은 웹/시스템 보안에 집중되어 있어, LLM 특화 보안 실습 환경의 부재

### 2. 기능 구현 및 기대효과
- OWASP LLM Top 10 취약점별 CTF 시나리오 (Prompt Injection, XSS, Excessive Agency 등)
- 이론(Edu)과 실습(Practice)을 진행할 수 있는 모듈형 플랫폼 설계
- Streamlit 기반 웹 인터페이스 구현 및 Supabase 연동을 통한 사용자 관리 및 문제 상태 저장
- RAG, 벡터 검색, OpenAI API를 통한 이메일 전송, 코드 실행 등 최신 LLM 활용 기법 적용

### 3. 산출물 및 성과
- HackLLM 플랫폼 개발 및 배포
- 특성화고 시범 교육을 통해 보안 인식 제고
- WISA 2025 학술대회 포스터 논문 채택 (Design and Implementation of a Security Vulnerability Practice Testbed in Agentic LLM Environments)`,

        contribution: `### 1. 프로젝트 기획 및 구현 총괄
- 팀 내 역할 분담 및 전체 일정 관리
- 웹 플랫폼 아키텍처 설계 및 주요 기능 구현
- GitHub를 통한 코드 리뷰 및 협업 프로세스 관리

### 2. 배포 및 CTF 운영
- Streamlit 및 Supabase를 활용한 플랫폼 배포 및 유지보수
- 실습(Practice) 문제를 활용한 CTF 대회 기획 및 운영 (2025.07.23 ~ 2025.07.26)
`,
        imageCount: 4,
    },
    2: {
        title: "Depth-Anything 경량화 및 최적화 연구",
        summary: "모빌리티 환경 적용을 위한 Vision AI 모델 경량화 및 추론 최적화 연구",
        period: "2025.03 ~ 2025.06",
        tags: ["Model Optimization", "TensorRT", "Quantization", "PyTorch"],
        links: [
            { name: "Download Paper", url: "/papers/Multi-faceted Optimization Strategies for Depth-Anything V2 in Mobility Applications.pdf", type: "paper" }
        ],
        intro: "Depth-Anything 모델을 드론 및 자율주행 로봇과 같은 엣지 디바이스에서 실시간으로 구동하기 위해 경량화 및 추론 속도를 최적화한 연구 프로젝트입니다.",
        team: `구성 : 연구 3명
담당 역할 : 모델 경량화 및 최적화 연구, 성능 평가 및 분석 (역할 기여도 90%, 전체 기여도 40%)`,
        description: `### 1. 프로젝트 배경
- 자율주행 및 드론 등 모빌리티 환경에서 단안 깊이 추정(Monocular Depth Estimation)의 중요성 증가
- 고성능 모델(Depth-Anything V2)의 높은 연산 비용으로 인해, 제한된 환경에서의 실시간 처리 한계 발생
- 성능 저하를 최소화하면서 추론 속도를 극대화하는 경량화 및 최적화 전략 연구 필요

### 2. 기능 구현 및 연구 내용
- 지식 증류(Knowledge Distillation) 기법을 활용하여 MobileNetV2 및 ViT-S 기반의 축소 모델 설계
- L1 비정형 가지치기(Pruning)와 동적 양자화(Dynamic Quantization)를 적용하여 파라미터 및 모델 크기 축소
- TensorRT 엔진 변환 및 FP16 정밀도 적용을 통해 GPU 추론 속도 및 메모리 효율 극대화
- 최적화 기법 조합(Pruning, Quantization 등)에 따른 정확도(RMSE)와 속도(Latency) 트레이드오프 분석

### 3. 산출물 및 성과
- 동적 양자화 및 FP16 최적화를 통해 베이스라인 대비 추론 속도 향상 달성
- 모빌리티 환경 적용을 위한 최적의 경량화 전략 도출 및 검증
- 연구 성과 논문 작성 (모빌리티 환경 적용을 위한 Depth-Anything V2 모델의 다각적 최적화 전략 분석)`,

        contribution: `### 1. 경량화 및 최적화 모델 개발
- Knowledge Distillation(지식 증류) 기법을 활용한 MobileNetV2 및 ViT-S 기반의 축소 모델 설계 및 구현
- 동적 양자화(Dynamic Quantization) 기법을 적용한 모델 경량화 및 성능 평가
- TensorRT 변환 스크립트 작성 및 FP16/INT8 정밀도별 성능 테스트 수행`,
        imageCount: 2,
    },
    3: {
        title: "JobTalk(잡톡)",
        summary: "AI 기반 진로 로드맵 설계 솔루션",
        period: "2025.08 ~ 2025.12",
        tags: ["React", "Node.js", "MariaDB", "OpenAI API"],
        links: [
            { name: "GitHub Repository", url: "https://github.com/hanataba227/JobTalk", type: "github" }
        ],
        intro: "사용자의 역량과 목표 직무를 분석하여 개인화된 진로 로드맵을 제시하고, 부족한 역량을 보완할 수 있는 구체적인 가이드를 제공하는 AI 솔루션",
        team: `구성 : 프론트엔드/서버 1명, 백엔드/DB 1명, AI 서비스 1명, UX/UI 디자이너 1명\n
담당 역할 : AI 구조 설계 및 프롬프트 엔지니어링 (역할 기여도 90%, 전체 기여도 20%)`,
        description: `### 1. 개발 배경
- 대학생들은 본인 상황에 맞는 진로 설계에 어려움을 겪고 있음
- 기존 진로 정보 및 추천 서비스는 개인별 맞춤 제공의 어려움이 있음
- 청년 실업, 정보 격차 해소를 위한 AI 맞춤형 진로 설계 서비스의 필요

### 2. 기능 구현 및 기대효과
- 사용자의 역량, 관심사, 목표 직무를 분석하여 개인 맞춤형 진로 로드맵 생성
- OpenAI GPT-4 기반의 프롬프트 엔지니어링을 통한 구체적이고 실행 가능한 진로 가이드 제공
- 자격증, 기업, 채용 플랫폼 등 외부 URL 등의 자료 제공

### 3. 산출물 및 성과
- JobTalk(잡톡) 웹 애플리케이션 개발 및 배포
- SW중심대학 인재 페스티벌 전시 참여
- 제38회 컴퓨터공학과 학술제 최우수상, 2025학년도 공과대학 연합작품전시회 최우수상 수상`,
        contribution: `### 1. AI 구조 설계 및 프롬프트 엔지니어링
- 사용자 입력(역량, 관심사, 목표 직무 등)을 통해 진로 로드맵 생성 프롬프트 설계
- 진로 로드맵 생성을 위한 JSON 템플릿 설계 및 구현
- OpenAI API 연동 및 프롬프트 엔지니어링`,
        imageCount: 4,
    },
    4: {
        title: "Qureka(큐레카)",
        summary: "AI 기반 디지털 교육자료 요약, 문제 생성 웹서비스",
        period: "2025.03 ~ 2025.12",
        tags: ["React", "Node.js", "Supabase", "FastAPI", "OpenAI API"],
        links: [
            { name: "GitHub Repository", url: "https://github.com/hanataba227/qureka-fastapi", type: "github" }
        ],
        intro: "사용자가 디지털 교육자료(PDF, PPT 등)를 업로드하여, 자료의 정보를 요약하고, 이를 바탕으로 문제를 생성해주는 프로그램",
        team: `구성 : 프론트엔드 1명, 백엔드(Node.js), DB 2명, 백엔드(FastAPI), AI 서비스 1명\n
담당 역할 : 총괄, 기획, FastAPI 백엔드 개발, AI 구조 설계 및 프롬프트 엔지니어링 (역할 기여도 80%, 전체 기여도 35%)`,
        description: `### 1. 개발 배경
- 디지털 교육자료의 양이 급증함에 따라, 효율적인 학습 방법에 대한 요구 증가
- 기존 요약 및 문제 생성 도구는 일반 문서에 최적화되어 있어, 교육자료 특화 기능 부족
- 디지털 교육자료에 특화된 AI 기반 요약 및 문제 생성 솔루션의 필요

### 2. 기능 구현 및 기대효과
- PDF, PPT 등 다양한 형식의 디지털 교육자료 업로드 및 처리 기능 구현
- OpenAI GPT-4 기반의 프롬프트 엔지니어링을 통한 교육자료 요약 및 문제 생성 기능 구현
- Supabase를 활용한 사용자 인증 및 자료 관리 기능 구현

### 3. 산출물 및 성과
- Qureka(큐레카) 웹 애플리케이션 개발 및 배포
- 제38회 컴퓨터공학과 학술제 최우수상 수상`,
        contribution: `### 1. 프로젝트 총괄 및 기획
- 전체 프로젝트 일정 관리 및 팀원 역할 분담
- 요구사항 분석 및 기능 명세서 작성

### 2. FastAPI 백엔드 개발 및 AI 구조 설계
- FastAPI 기반 백엔드 서버 개발
- 디지털 교육자료 업로드 및 처리 API 개발
- 요약 및 문제 생성 기능 구현을 위한 OpenAI API 연동 및 프롬프트 엔지니어링`,
        imageCount: 4,
    }
};

const parseBold = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
        part.startsWith('**') && part.endsWith('**')
            ? <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>
            : part
    );
};

const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
        const trimmedLine = line.trim();
        const indent = line.search(/\S|$/);

        if (trimmedLine.startsWith('###')) {
            return (
                <h3 key={index} className="text-lg font-bold text-slate-900 mt-6 mb-3 first:mt-0">
                    {trimmedLine.replace(/^###\s*/, '')}
                </h3>
            );
        }

        if (trimmedLine.startsWith('-')) {
            const text = trimmedLine.replace(/^-\s*/, '');
            return (
                <div key={index} className="flex items-start mb-1" style={{ paddingLeft: `${indent * 0.25}rem` }}>
                    <span className="mr-2 mt-2.5 w-1 h-1 bg-slate-400 rounded-full flex-shrink-0"></span>
                    <p className="flex-1 leading-relaxed text-slate-700">
                        {parseBold(text)}
                    </p>
                </div>
            );
        }

        if (trimmedLine === '') {
            return <div key={index} className="h-2" />;
        }

        return (
            <p key={index} className="mb-1 leading-relaxed text-slate-700" style={{ paddingLeft: `${indent * 0.25}rem` }}>
                {parseBold(line)}
            </p>
        );
    });
};

function ProjectDetail() {
    const { id } = useParams();
    const project = projectData[Number(id) as keyof typeof projectData];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        setCurrentImageIndex(0);
    }, [id]);

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
    }

    const totalImages = project.imageCount || 1;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

    return (
        <div className="pt-24 pb-20 px-6 min-h-screen bg-white">
            <div className="container mx-auto max-w-3xl">
                <Link to="/" className="inline-flex items-center text-slate-500 hover:text-primary mb-8 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>

                <article className="space-y-10">
                    {/* Header Section */}
                    <header className="border-b border-slate-200 pb-8">
                        <h1 className="text-4xl font-bold text-slate-900 mb-3">{project.title}</h1>
                        <p className="text-2xl text-slate-600 font-medium mb-4">{project.summary}</p>
                        <div className="flex items-center text-slate-500">
                            <span className="bg-slate-100 px-3 py-1 rounded-md text-sm font-medium">
                                {project.period}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-6">
                            {project.links?.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm transition-colors font-medium whitespace-nowrap ${link.type === 'github'
                                        ? 'bg-slate-900 text-white hover:bg-slate-800'
                                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
                                        } `}
                                >
                                    {link.type === 'github' ? (
                                        <Github className="w-4 h-4 mr-1.5" />
                                    ) : link.type === 'paper' ? (
                                        <FileText className="w-4 h-4 mr-1.5" />
                                    ) : (
                                        <ExternalLink className="w-4 h-4 mr-1.5" />
                                    )}
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </header>

                    {/* Tags */}
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">태그</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Introduction */}
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">소개</h3>
                        <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                            {project.intro}
                        </p>
                    </section>

                    {/* Team */}
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">팀 소개</h3>
                        <p className="text-slate-700 whitespace-pre-line">
                            {project.team}
                        </p>
                    </section>

                    {/* Image */}
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">이미지</h3>
                        <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm relative group">
                            <div className="aspect-video bg-slate-100 relative">
                                <img
                                    src={`/images/image_${id}_${currentImageIndex + 1}.png`}
                                    alt={`${project.title} Screenshot ${currentImageIndex + 1}`}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        target.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <div className="hidden absolute inset-0 flex items-center justify-center text-slate-400">
                                    <div className="text-center">
                                        <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>이미지를 준비중입니다</span>
                                    </div>
                                </div>
                            </div>

                            {totalImages > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {Array.from({ length: totalImages }).map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'
                                                    }`}
                                                aria-label={`Go to image ${idx + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </section>

                    {/* Description (Problem & Solution) */}
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">프로젝트 설명</h3>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-slate-700 leading-relaxed">
                            {renderContent(project.description)}
                        </div>
                    </section>

                    {/* Contribution */}
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">기여한 부분</h3>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-slate-700 leading-relaxed">
                            {renderContent(project.contribution)}
                        </div>
                    </section>

                    {/* Result & Lessons Learned */}
                    {project.result && (
                        <section>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">결과 및 성과</h3>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-slate-700 leading-relaxed">
                                {renderContent(project.result)}
                            </div>
                        </section>
                    )}
                </article>
            </div>
        </div>
    );
}

export default ProjectDetail;
