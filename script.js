const messages = {
  silent: '조용하지만 독한 방귀가 스텔스 모드로 공격! 주변인 모두 의심만 가득.',
  loud: '건물도 흔들릴 듯한 굉음! 이 정도면 사운드 시스템 따로 필요 없겠네요.',
  squeaky: '삐익~ 삐익~ 작은 경고음 같지만 곧 폭풍의 전조!',
  machine: '타타타타! 기관총 같은 연속 발사, 상대는 피할 틈이 없다!',
  sulfur: '유황 냄새가 코를 찌른다! 누가 성냥 켰나요?'
};

document.getElementById('generate').addEventListener('click', () => {
  const type = document.getElementById('fartType').value;
  const message = messages[type] || '알 수 없는 방귀… 더 연구가 필요합니다!';
  document.getElementById('output').textContent = message;
});

