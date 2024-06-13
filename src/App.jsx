import { memo } from 'react';
import { connect } from 'react-redux';
import { UPDATE_COMENT_LIST, UPDATE_COUNT } from './store/contants';
import { actionCreator, fetchUpdateCommentListAction, fetchUpdateCommentListAction2, fetchUpdateCommentListAction3} from './store/actionCreator';


const App = memo((props) => {
  const { count, commentList, updateCountAction, updateCommentListAction, updateMenuListAction } = props;
  return (
    <div className="app-container">
      <h1>count: { count }</h1>
      <button onClick={()=> updateCountAction(UPDATE_COUNT, 100)}>SET COUNT 100</button>
      <button onClick={() => updateCommentListAction(UPDATE_COMENT_LIST)}>UPDATE COMMENT LIST</button>
      <button onClick={() => updateMenuListAction(UPDATE_COMENT_LIST)}>UPDATE MENU_LIST</button>
      <div className='comment-list'>
        {
          commentList && commentList.map(comment => (
            <div key={comment.id}>{comment.name}</div>
          ))
        }
      </div>
    </div>
  )
})


const mapStateToProps = (state) => {
  return {
    count: state.count,
    menuList: state.menuList,
    commentList: state.commentList
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    updateCountAction(type, payload) {
      dispatch(actionCreator({
        type,
        payload
      }));
    },
    updateCommentListAction(type) {
      dispatch(fetchUpdateCommentListAction(type));
    },
    updateMenuListAction(type) {
      dispatch(fetchUpdateCommentListAction2(type));
    }
  }
}


export default connect(mapStateToProps, mapActionsToProps)(App);