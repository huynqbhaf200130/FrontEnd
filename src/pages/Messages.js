import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../css/Messages.css";

const Messages = () => {
  return (
    <div className="Messages">
      <Header />
      <Sidebar />
      <div class="Container">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="headMess">
                <img src="./assets/SVG/search.svg" alt="search" />
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="listMess">
                <div class="userMess">
                  <div class="imgMess">
                    <img src="./assets/Images/Avatar/avatar.jpg" alt="avt1" />
                  </div>
                  <div class="infoMess">
                    <h5>Anh Ngoc</h5>
                    <p>Sao anh hãm thế nhỉ, đm anh nữa </p>
                  </div>
                  <div class="timeMess">
                    <p>10:00</p>
                  </div>
                </div>

                {/* 2 */}
                <div class="userMess">
                  <div class="imgMess">
                    <img src="./assets/Images/Avatar/avatar.jpg" alt="avt1" />
                  </div>
                  <div class="infoMess">
                    <h5>Anh Ngoc</h5>
                    <p>Đã gửi cho bạn một tin nhắn</p>
                  </div>
                  <div class="timeMess">
                    <p>10:00</p>
                  </div>
                </div>

                {/* 3 */}
                <div class="userMess">
                  <div class="imgMess">
                    <img src="./assets/Images/Avatar/avatar.jpg" alt="avt1" />
                  </div>
                  <div class="infoMess">
                    <h5>Anh Ngoc</h5>
                    <p>Đã gửi cho bạn một tin nhắn</p>
                  </div>
                  <div class="timeMess">
                    <p>10:00</p>
                  </div>
                </div>

                {/* 4 */}
                <div class="userMess">
                  <div class="imgMess">
                    <img src="./assets/Images/Avatar/avatar.jpg" alt="avt1" />
                  </div>
                  <div class="infoMess">
                    <h5>Anh Ngoc</h5>
                    <p>Đã gửi cho bạn một tin nhắn</p>
                  </div>
                  <div class="timeMess">
                    <p>10:00</p>
                  </div>
                </div>

                {/* 5 */}
                <div class="userMess">
                  <div class="imgMess">
                    <img src="./assets/Images/Avatar/avatar.jpg" alt="avt1" />
                  </div>
                  <div class="infoMess">
                    <h5>Anh Ngoc</h5>
                    <p>Đã gửi cho bạn một tin nhắn</p>
                  </div>
                  <div class="timeMess">
                    <p>10:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <div class="chatMess">
                {/* NHẮN */}
                <div class="fromMess">
                  <div class="imgMess">
                    <img src="./assets/Images/Avatar/avatar.jpg" alt="avt1" />
                    <div class="timeMess">
                      <p>10:00</p>
                    </div>
                  </div>

                  <div class="contentMess">
                    <p>Helo anh dep trai, toi nay di choi voi em khong ne`</p>
                  </div>
                </div>

                {/* Trả lời */}
                <div class="toMess">
                  <div class="imgMess">
                    <img src="./assets/Images/Avatar/avatar.jpg" alt="avt1" />
                    <div class="timeMess">
                      <p>10:00</p>
                    </div>
                  </div>

                  <div class="contentMess">
                    <p>Xin lỗi em nhé, anh có người yêu rồi</p>
                  </div>
                </div>

                {/* Nhắn */}
                <div class="fromMess">
                  <div class="imgMess">
                    <img src="./assets/Images/Avatar/avatar.jpg" alt="avt1" />
                    <div class="timeMess">
                      <p>10:06</p>
                    </div>
                  </div>

                  <div class="contentMess">
                    <p>Thế cho em làm quen anh được không ạ?</p>
                  </div>
                </div>

                {/* Trả Lời */}
                <div class="toMess">
                  <div class="imgMess">
                    <img src="./assets/Images/Avatar/avatar.jpg" alt="avt1" />
                    <div class="timeMess">
                      <p>11:30</p>
                    </div>
                  </div>

                  <div class="contentMess">
                    <p>Không em nhé!</p>
                  </div>
                </div>

                {/* Nhắn */}
                <div class="fromMess">
                  <div class="imgMess">
                    <img src="./assets/Images/Avatar/avatar.jpg" alt="avt1" />
                    <div class="timeMess">
                      <p>12:34</p>
                    </div>
                  </div>

                  <div class="contentMess">
                    <p>Sao anh hãm thế nhỉ chắc người yêu anh khổ lắm</p>
                  </div>
                </div>

                {/* Trả Lời */}
                <div class="toMess">
                  <div class="imgMess">
                    <img src="./assets/Images/Avatar/avatar.jpg" alt="avt1" />
                    <div class="timeMess">
                      <p>11:30</p>
                    </div>
                  </div>

                  <div class="contentMess">
                    <p>Ừ em</p>
                  </div>
                </div>

                {/* Nhắn */}
                <div class="fromMess">
                  <div class="imgMess">
                    <img src="./assets/Images/Avatar/avatar.jpg" alt="avt1" />
                    <div class="timeMess">
                      <p>12:34</p>
                    </div>
                  </div>

                  <div class="contentMess">
                    <p>Ừ cái đmm</p>
                  </div>
                </div>
              </div>
              {/* textMess */}
              <div class="textMess">
                <div class="controlMess">
                  <label for="file" className="fileMess">
                    <img src="./assets/SVG/image.svg" alt="file" />
                  </label>
                  <input type="file" className="fileMess" id="file" />
                  <input
                    type="text"
                    placeholder="Messages"
                    className="inputMess"
                  />
                  <button type="button" className="btnMess">
                    <img src="./assets/SVG/sent.svg" alt="sent" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Messages;
