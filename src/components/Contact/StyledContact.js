import styled from "styled-components";

const StyledContact = styled.div`
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  display: flex;
  &:hover {
    background-color: #eeeeee;
  }
  .avatar-img {
    padding: 5px;
    object-fit: contain;
    //box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.5);
  }
  .info {
    margin-left: 10px;
    .fullname {
      font-weight: bold;
      text-transform: capitalize;
    }
    .email {
    }
  }
  .actions {
    .icon {
      margin: 16px 5px;
      transition: all 0.1s ease;

      &:hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  }
`;

export default StyledContact;
