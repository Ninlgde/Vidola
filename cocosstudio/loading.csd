<GameFile>
  <PropertyGroup Name="loading" Type="Scene" ID="40f5fc51-4924-4cc7-b669-b548521fb042" Version="2.3.3.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000">
        <Timeline ActionTag="-2118060328" Property="Position">
          <PointFrame FrameIndex="0" X="320.0000" Y="480.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-2118060328" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-2118060328" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
      </Animation>
      <ObjectData Name="Scene" Tag="4" ctype="GameNodeObjectData">
        <Size X="640.0000" Y="960.0000" />
        <Children>
          <AbstractNodeData Name="_btn_start" ActionTag="-1047516832" Tag="6" IconVisible="False" LeftMargin="281.0742" RightMargin="278.9258" TopMargin="600.5021" BottomMargin="319.4979" TouchEnable="True" FontSize="14" ButtonText="开始游戏" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="16" Scale9Height="14" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
            <Size X="80.0000" Y="40.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="321.0742" Y="339.4979" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5017" Y="0.3536" />
            <PreSize X="0.1250" Y="0.0417" />
            <TextColor A="255" R="65" G="65" B="70" />
            <DisabledFileData Type="Default" Path="Default/Button_Disable.png" Plist="" />
            <PressedFileData Type="Default" Path="Default/Button_Press.png" Plist="" />
            <NormalFileData Type="Default" Path="Default/Button_Normal.png" Plist="" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="node_bg" ActionTag="-2118060328" Tag="5" IconVisible="True" HorizontalEdge="BothEdge" VerticalEdge="BothEdge" LeftMargin="320.0000" RightMargin="320.0000" TopMargin="480.0000" BottomMargin="480.0000" ctype="SingleNodeObjectData">
            <Size X="0.0000" Y="0.0000" />
            <Children>
              <AbstractNodeData Name="lbl_1" ActionTag="-16553706" Tag="5" IconVisible="False" LeftMargin="-216.5000" RightMargin="-216.5000" TopMargin="-11.5000" BottomMargin="-11.5000" FontSize="20" LabelText="这里是loading scene 到时候会做一些loading操作" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="433.0000" Y="23.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="0.0000" Y="0.0000" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint />
            <Position X="320.0000" Y="480.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="0.0000" Y="0.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>