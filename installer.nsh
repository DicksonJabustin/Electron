!include "MUI2.nsh"
!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_LICENSE "LICENSE.txt"
!define MUI_PAGE_CUSTOMFUNCTION_SHOW SelectFolderShow
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_LANGUAGE English

Function SelectFolderShow
    StrCpy $INSTDIR $PROGRAMFILES64\MyApp
FunctionEnd

Section
    SetOutPath $INSTDIR
    File MyApp.exe
SectionEnd
