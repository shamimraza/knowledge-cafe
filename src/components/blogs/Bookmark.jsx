import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div>
            <h2>Book :{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {

}

export default Bookmark;