<GameFile>
  <PropertyGroup Name="life" Type="Scene" ID="7ec60e15-3d72-4208-88bf-579053be7ee3" Version="2.3.3.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Scene" Tag="11" ctype="GameNodeObjectData">
        <Size X="640.0000" Y="960.0000" />
        <Children>
          <AbstractNodeData Name="_btn_start" ActionTag="-1174141812" CallBackType="Click" CallBackName="onStartClicked" Tag="18" IconVisible="False" LeftMargin="388.0743" RightMargin="155.9257" TopMargin="100.3021" BottomMargin="799.6979" TouchEnable="True" FontSize="14" ButtonText="开始" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="16" Scale9Height="14" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
            <Size X="96.0000" Y="60.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="436.0743" Y="829.6979" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.6814" Y="0.8643" />
            <PreSize X="0.1500" Y="0.0625" />
            <TextColor A="255" R="65" G="65" B="70" />
            <DisabledFileData Type="Default" Path="Default/Button_Disable.png" Plist="" />
            <PressedFileData Type="Default" Path="Default/Button_Press.png" Plist="" />
            <NormalFileData Type="Default" Path="Default/Button_Normal.png" Plist="" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="panel_sprite" ActionTag="-1357530405" Tag="19" IconVisible="False" TopMargin="254.0000" BottomMargin="66.0000" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="640.0000" />
            <AnchorPoint />
            <Position Y="66.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition Y="0.0688" />
            <PreSize X="1.0000" Y="0.6667" />
            <SingleColor A="255" R="150" G="200" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
          <AbstractNodeData Name="panel_btn" ActionTag="-957651619" Tag="13" IconVisible="False" TopMargin="254.0000" BottomMargin="66.0000" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="640.0000" />
            <AnchorPoint />
            <Position Y="66.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition Y="0.0688" />
            <PreSize X="1.0000" Y="0.6667" />
            <SingleColor A="255" R="150" G="200" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
          <AbstractNodeData Name="_btn_life" ActionTag="-1494999197" Tag="13" IconVisible="False" TopMargin="254.0000" BottomMargin="66.0000" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="5" RightEage="5" TopEage="5" BottomEage="5" Scale9OriginX="5" Scale9OriginY="5" Scale9Width="6" Scale9Height="6" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
            <Size X="640.0000" Y="640.0000" />
            <AnchorPoint />
            <Position Y="66.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition Y="0.0688" />
            <PreSize X="1.0000" Y="0.6667" />
            <TextColor A="255" R="65" G="65" B="70" />
            <DisabledFileData Type="Default" Path="Default/Button_Disable.png" Plist="" />
            <PressedFileData Type="Normal" Path="tmp_2.png" Plist="" />
            <NormalFileData Type="Normal" Path="tmp_2.png" Plist="" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="_input_turn" ActionTag="1704912731" Tag="20" IconVisible="False" LeftMargin="135.7901" RightMargin="419.2099" TopMargin="143.4977" BottomMargin="793.5023" TouchEnable="True" FontSize="20" IsCustomSize="True" LabelText="" PlaceHolderText="10" MaxLengthEnable="True" MaxLengthText="2" ctype="TextFieldObjectData">
            <Size X="85.0000" Y="23.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="178.2901" Y="805.0023" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.2786" Y="0.8385" />
            <PreSize X="0.1328" Y="0.0240" />
          </AbstractNodeData>
          <AbstractNodeData Name="Text_1" ActionTag="1503464309" Tag="21" IconVisible="False" LeftMargin="50.7892" RightMargin="334.2108" TopMargin="95.6476" BottomMargin="841.3524" FontSize="20" LabelText="输入进行几轮游戏(最少10轮)" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
            <Size X="255.0000" Y="23.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="178.2892" Y="852.8524" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.2786" Y="0.8884" />
            <PreSize X="0.3984" Y="0.0240" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="Text_2" ActionTag="2089873660" Tag="14" IconVisible="False" LeftMargin="205.0000" RightMargin="218.0000" TopMargin="28.0060" BottomMargin="886.9940" FontSize="40" LabelText="Life Game!!!" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
            <Size X="217.0000" Y="45.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="313.5000" Y="909.4940" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="191" G="191" B="191" />
            <PrePosition X="0.4898" Y="0.9474" />
            <PreSize X="0.3391" Y="0.0469" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="_btn_clean" ActionTag="1734561036" Tag="17" IconVisible="False" LeftMargin="531.5000" RightMargin="62.5000" TopMargin="113.5386" BottomMargin="810.4614" TouchEnable="True" FontSize="14" ButtonText="清除" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="16" Scale9Height="14" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
            <Size X="46.0000" Y="36.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="554.5000" Y="828.4614" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.8664" Y="0.8630" />
            <PreSize X="0.0719" Y="0.0375" />
            <TextColor A="255" R="65" G="65" B="70" />
            <DisabledFileData Type="Default" Path="Default/Button_Disable.png" Plist="" />
            <PressedFileData Type="Default" Path="Default/Button_Press.png" Plist="" />
            <NormalFileData Type="Default" Path="Default/Button_Normal.png" Plist="" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>