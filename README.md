# Blog Project

## 주요 기능

-   CRUD 기능
-   마크업다운 라이브러리 적용
-   이미지 파일 업로드 라이브러리 적용

## 상세 설명

### STATE

-   **blogList** = [{ id, title, content, category, img }]

### PAGE

-   **List** : 리스트
    -   카테고리별 보여주기(기본값 : 전체)
    -   페이지네이션
    -   블로그 주인이 맞다면, 카테고리 이동 / 삭제 / 수정 추가
-   **View** : 뷰
    -   id값에 따라서 보여주기
    -   마크업다운 라이브러리로 content 데이터 뿌려주기
    -   블로그 주인이 맞다면, 수정 / 삭제 버튼 추가
-   **Write** : 쓰기
    -   [component] Form 사용
    -   title / content / 이미지 파일 업로드 기능
-   **Edit** : 수정
    -   [component] Form 사용
    -   수정할 데이터(id값으로 뽑기) 전달

+) 이건 좀 더 검색 해봐야함.

-   **SignIn** : 로그인
-   **Signup** : 회원가입
