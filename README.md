24.11.08 TicketPoké 개발 시작

24.11.13 하단바 + 햄버거 수정 /=> 웹 크롤링 할 예정

24.11.15 인터파크티켓사이트에서 핫콘서트카테고리에서 10개정도 콘서트 정보가져오는 크롤링 + DB에 저장까지 진행 /=> localhost 연결해서 데이터 화면에 띄우는 거 할 예정

24.11.20 이미지까지 가져와서 db에 저장하고 서버 만들어서 서버랑 RN 연동하여 띄우기까지 성공 /=> 로그인 구현해서 콘서트 정보 저장하는 거 할 예정

24.12.6 react native 내의 로그인 확장자를 사용하여 로그인을 구현했고 아이디 및 토큰까지 받아와서 console로 띄우는 것까지 성공했다. /=> 데이터베이스를 구축해서 저장해서 로그인이 되는 것처럼 보이게 만들 예정이다. 그리고 key chain으로 토큰을 관리하는 것도 있는 거 같던데 좀 더 알아볼 예정이다.

24.12.?? node js를 이용해서 로그인했을 때 넘어오는 정보들을 데이터베이스에 저장하는 것을 구현했고, 같은 이메일이면 오류까지 뜨게 했는데 좀 더 점검이 필요하다.
/=> 회원정보를 계속 사용해서 어플의 사용자 정보에 저장할 수 있도록 할 예정이다.

24.12.27 카카오톡 로그인을 시도하면 로그인 정보들 저장 및 동일한 아이디일 경우 update할 수 있게 했다. loginData를 BtmBar로 보내고 거기서 Main으로 뿌리게 했다.
/=> 이제 공연 정보를 사용자가 선택하면 그 선택 내용을 db에 저장하게 하고 관리할 수 있게끔 할 생각이다.
