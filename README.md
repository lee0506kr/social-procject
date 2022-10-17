1. social-project

2. 기능 
   : 카카오톡 로그인 구현 및 네이버 영화 조회 및 리스트 구현 
     거의 Rest Api 이해 및 함수형을 이해 하기 위한 프로젝트 입니다. 

3. 구조 
    src 
    assets 
      ㄴ font : 글자 font
      ㄴ images : 이미지 svg
    components
      ㄴ common : 공통 components 추후 필요 한 것이 있다면 추가 예정 
                ex) Button, input 등 
      ㄴ layout : 구성 요소 즉, Login 안에 있는 Form Components 구현 하는 곳 
      ㄴ constants : 기타 상수 요소 css 같은 것들 
    customHooks 
      ㄴ hook들 cutsom 한곳?
      ㄴ 해당 건에 대하여서는 직접 설명을 들어야 함
    pages 
      ㄴ 페이지 구현 즉 Home, Login, Join 페이지들 만드는 곳 
        이 곳에 대하여서 components 안에 있는 layout 요소들을 참조 하는 것입니다. 
      ㄴ style 
        pages 들마다 style 위 건에 대하여서는 밖에 있는 style로 뺄 예정입니다. 

    style 
       ㄴ csss 