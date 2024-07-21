import React, { useState } from "react";
import styled from "@emotion/styled";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faWindowClose } from "@fortawesome/free-solid-svg-icons";

const ModalDot = styled.a`
  outline: 0;
  font-size: 20px;
  :hover,
  focus {
    color: #12579b;
  }
`;

const CVModal = () => {
  const [show, setShow] = useState(false);
  const showModal = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const hideModal = () => setShow(false);
  return (
    <React.Fragment>
      <ModalDot
        href="#"
        data-toggle="modal"
        data-target="#myModal-1"
        onClick={showModal}
      >
        <FontAwesomeIcon icon={faEllipsisH} />
      </ModalDot>
      <Modal
        show={show}
        animation={true}
        id="myModal-1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel-1"
      >
        <Modal.Header className="text-center">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" onClick={hideModal}>
              <FontAwesomeIcon icon={faWindowClose} />
            </span>
          </button>
          <h4 class="modal-title" id="myModalLabel-1">
            GRADUATION AT ASHTON UNI
          </h4>
          <h6>
            <small>Jan 2014 - Mar 2015</small>
          </h6>
        </Modal.Header>
        <Modal.Body>
          <p>
            I have learned a great many things from participating in varsity
            football. It has changed my entire outlook on and attitude toward
            life. Before my freshman year at [high-school], I was shy, had low
            self-esteem and turned away from seemingly impossible challenges.
            Football has altered all of these qualities. On the first day of
            freshman practice, the team warmed up with a game of touch football.
            The players were split up and the game began. However, during the
            game, I noticed that I didn't run as hard as I could, nor did I try
            to evade my defender and get open. The fact of the matter is that I
            really did not want to be thrown the ball. I didn't want to be the
            one at fault if I dropped the ball and the play didn't succeed. I
            did not want the responsibility of helping the team because I was
            too afraid of making a mistake. That aspect of my character led the
            first years of my high school life. All the while, I went to
            practice.
          </p>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </React.Fragment>
  );
};

export default CVModal;
