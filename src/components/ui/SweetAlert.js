import Swal from 'sweetalert2';

import PropTypes from 'prop-types'
const SweetAlert = ({ title, text, icon,input,inputPlaceholder,showCancelButton}) => {
    return Swal.fire({
        icon,
        title,
        text,
        input,
        inputPlaceholder,
        showCancelButton
    });
};

SweetAlert.propTypes ={
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string
}
export default SweetAlert;
