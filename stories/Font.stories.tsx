import React from "react";
import { Font } from "./Font.component";

export default {
  title: "Component/Font",
  component: Font,
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};


export const Title = {
  render: () => (
    <>
      <table style={{ gap: "10px", color: "white" }}>
        <tr>
          <td>
            <Font type="title24SB">
              방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM
            </Font>
          </td>
          <td>
            <p>title 24SB</p>
          </td>
        </tr>
        <tr>
          <td>
            <Font type="title24M">방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM</Font>
          </td>
          <td>
            <p>title 24M</p>
          </td>
        </tr>
        <tr>
          <td>
            <Font type="title20SB">
              방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM
            </Font>
          </td>
          <td>
            <p>title 20SB</p>
          </td>
        </tr>
        <tr>
          <td>
            <Font type="title20M">방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM</Font>
          </td>
          <td>
            <p>title 20M</p>
          </td>
        </tr>
        <tr>
          <td>
            <Font type="title18SB">
              방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM
            </Font>
          </td>
          <td>
            <p>title 18SB</p>
          </td>
        </tr>
        <tr>
          <td>
            <Font type="title18M">방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM</Font>
          </td>
          <td>
            <p>title 18M</p>
          </td>
        </tr>
        <tr>
          <td>
            <Font type="title16SB">
              방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM
            </Font>
          </td>
          <td>
            <p>title 16SB</p>
          </td>
        </tr>
        <tr>
          <td>
            <Font type="title16M">방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM</Font>
          </td>
          <td>
            <p>title 16M</p>
          </td>
        </tr>
        <tr>
          <td>
            <Font type="body16M">방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM</Font>
          </td>
          <td>
            <p>body 16M</p>
          </td>
        </tr>
        <tr>
          <td>
            <Font type="body16R">방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM</Font>
          </td>
          <td>
            <p>body 16R</p>
          </td>
        </tr>
        <tr>
          <td>
            <Font type="body14M">방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM</Font>
          </td>
          <td>
            <p>body 14M</p>
          </td>
        </tr>
        <tr>
          <td>
            <Font type="body14R">방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM</Font>
          </td>
          <td>
            <p>body 14R</p>
          </td>
        </tr>
        <tr>
          <td>
            <Font type="body12M">방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM</Font>
          </td>
          <td>
            <p>body 12M</p>
          </td>
        </tr>
        <tr>
          <td>
            <Font type="caption12SB">
              방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM
            </Font>
          </td>
          <td>
            <p>caption 12SB</p>
          </td>
        </tr>
        <tr>
          <td>
            <Font type="caption12M">
              방탈출 힌트폰 서비스 넥스트룸 NEXT ROOM
            </Font>
          </td>
          <td>
            <p>caption 12M</p>
          </td>
        </tr>
      </table>
    </>
  ),
};
