import {connect} from 'react-redux';
import DeleteTopicModal from './delete_topic_modal';
import { closeModal } from '../../actions/modal_action';
import { deleteTopic } from '../../actions/topics_action';



const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  deleteTopic: data => dispatch(deleteTopic(data))
})


export default connect(null, mdp)(DeleteTopicModal)