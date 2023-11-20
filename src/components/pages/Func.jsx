//(개발하고자 하는 웹 페이지 url주소를 활용하고자 할 때 사용하는 Hook입니다.)
import { useNavigate } from 'react-router-dom';

function Func(title, poster_path) {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/comment/id/${title}`)
  };

  return (
  	<img src={poster_path} alt={title} onClick={onClickImg} />
  );
}

export default Func;