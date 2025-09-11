import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  ...compat.plugins("import", "react-hooks", "unused-imports"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // import 관련 규칙
      "import/order": [
        "warn", // import 순서를 잘못 배치하면 경고
        {
          groups: [
            "builtin", // Node.js 내장 모듈 (fs, path 등)
            "external", // npm에서 설치한 외부 라이브러리
            "internal", // 프로젝트 내부 모듈 (절대 경로)
            "parent", // 상위 디렉토리에서 가져온 모듈 (../)
            "sibling", // 같은 디렉토리에서 가져온 모듈 (./)
            "index", // index 파일에서 가져온 모듈
          ],
          "newlines-between": "always", // 각 그룹 사이에 빈 줄 강제
          alphabetize: {
            order: "asc", // 알파벳 오름차순 정렬
            caseInsensitive: true, // 대소문자 구분 없이 정렬
          },
        },
      ],
      "import/no-duplicates": "error", // 중복된 import 문 금지
      "import/no-unresolved": "off", // 경로 해결 불가 모듈 경고 끄기 (@ Next.js 별칭 경로 때문)

      // React Hooks 규칙
      "react-hooks/rules-of-hooks": "error", // Hook 사용 규칙 위반시 에러 (조건문 내부 사용 금지 등)
      "react-hooks/exhaustive-deps": "warn", // useEffect 의존성 배열 누락시 경고 (끌까? 봐서)

      // 사용하지 않는 import 제거
      "unused-imports/no-unused-imports": "error", // 사용하지 않는 import 문 자동 제거
      "unused-imports/no-unused-vars": [
        "warn", // 사용하지 않는 변수가 있으면 경고
        {
          vars: "all", // 모든 변수 검사
          varsIgnorePattern: "^_", // 언더스코어로 시작하는 변수는 무시 (_unused)
          args: "after-used", // 사용된 매개변수 이후의 미사용 매개변수만 검사
          argsIgnorePattern: "^_", // 언더스코어로 시작하는 매개변수는 무시
        },
      ],

      // 기본 규칙들
      "no-unused-vars": "off", // 기본 미사용 변수 규칙 끄기 (unused-imports가 더 강력함)
      //   "no-console": "warn", // console.log 사용시 경고 (프로덕션에서 제거 권장)
      "prefer-const": "warn", // 재할당하지 않는 변수는 const 사용해라. 경고만 하자
    },
  },
];

export default eslintConfig;
