let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"IntegrationProcedures","value":{"dsDelay":0,"inputMap":{"ApplicationId":"{recordId}"},"ipMethod":"Project_PreInspectionMilestone","resultVar":"","vlocityAsync":false}},"enableLwc":true,"isFlex":true,"lwc":{"DeveloperName":"cfMilestonePreInspection_2_Dab","Id":"0Rb8G000000ClkUSAS","ManageableState":"unmanaged","MasterLabel":"cfMilestonePreInspection_2_Dab","NamespacePrefix":"c"},"selectableMode":"Multi","states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"pending-submission-block-Block-0-Block-0-Text-0","key":"element_element_element_element_block_0_0_block_0_0_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_element_element_block_0_0_block_0_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cstrong%3EScheduled%20Pre-Inspection%20Date%3C/strong%3E%3C/div%3E%0A%3Cdiv%3E%7BDates.PreInspDate%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"pending-submission-block-Block-0-Block-0","key":"element_element_element_block_0_0_block_0_0_block_0_0","name":"Block","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"pending-submission-block-Block-0-Block-0-Text-0","key":"element_element_element_element_block_0_0_block_0_0_block_1_0_outputField_0_0","name":"Text","parentElementKey":"element_element_element_block_0_0_block_0_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cstrong%3EPre-Inspection%20Complete%20Date%3C/strong%3E%3C/div%3E%0A%3Cdiv%3E%7BDates.CompleteDate%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"pending-submission-block-Block-0-Block-0-clone-0","key":"element_element_element_block_0_0_block_0_0_block_1_0","name":"Block","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"pending-submission-block-Block-0-Block-0-Text-0","key":"element_element_element_element_block_0_0_block_0_0_block_2_0_outputField_0_0","name":"Text","parentElementKey":"element_element_element_block_0_0_block_0_0_block_2_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cstrong%3EPre-Inspection%20Result%3C/strong%3E%3C/div%3E%0A%3Cdiv%3E%7BFields.Pre_Inspection_Result__c%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"pending-submission-block-Block-0-Block-1-clone-0","key":"element_element_element_block_0_0_block_0_0_block_2_0","name":"Block","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"pending-submission-block-Block-0-Block-0-Text-0","key":"element_element_element_element_block_0_0_block_0_0_block_3_0_outputField_0_0","name":"Text","parentElementKey":"element_element_element_block_0_0_block_0_0_block_3_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cstrong%3ESummary%20of%20Findings%3C/strong%3E%3C/div%3E%0A%3Cdiv%3E%7BFields.Pre_Inspection_Summary__c%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"pending-submission-block-Block-0-Block-2-clone-0","key":"element_element_element_block_0_0_block_0_0_block_3_0","name":"Block","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"POL_Block-Block-0","key":"element_element_block_0_0_block_0_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"},{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"pending-submission-block-Block-0-Block-0-Text-0","key":"element_element_element_element_block_0_0_block_1_0_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_element_element_block_0_0_block_1_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cstrong%3EAction%20Required%3C/strong%3E%3C/div%3E%0A%3Cdiv%3E%7BFields.Action_Required__c%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"pending-submission-block-Block-0-Block-0","key":"element_element_element_block_0_0_block_1_0_block_0_0","name":"Block","parentElementKey":"element_element_block_0_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"pending-submission-block-Block-0-Block-0-clone-0","key":"element_element_element_block_0_0_block_1_0_block_1_0","name":"Block","parentElementKey":"element_element_block_0_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"pending-submission-block-Block-0-Block-1-clone-0","key":"element_element_element_block_0_0_block_1_0_block_2_0","name":"Block","parentElementKey":"element_element_block_0_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"action","elementLabel":"POL_Block-Block-1-Block-0-clone-0-Action-0","key":"element_element_element_element_block_0_0_block_1_0_block_3_0_action_0_0","name":"Action","property":{"buttonVariant":"brand","card":"{card}","displayAsButton":true,"hideActionIcon":true,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"Upload Files","flyoutLwc":"project-summary-upload-docs-english","flyoutParams":{"ApplicationId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1638553016704","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"ProjectSummary/UploadDocs/English","type":"Flyout","vlocityIcon":"standard-default"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"pending-submission-block-Block-0-Block-2-clone-0","key":"element_element_element_block_0_0_block_1_0_block_3_0","name":"Block","parentElementKey":"element_element_block_0_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"POL_Block-Block-0-clone-0","key":"element_element_block_0_0_block_1_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"POL_Block","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":true,"data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"label":"Pending Pre-Inspection","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#4BCA81","radius":"6px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"6"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #4BCA81 6px solid;border-right: #4BCA81 6px solid;border-bottom: #4BCA81 6px solid;border-left: #4BCA81 6px solid; \n    border-radius:6px;     ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#FBFF0F","radius":"6px","style":"","type":["border_top","border_right","border_bottom","border_left"],"width":"6"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #FBFF0F 6px solid;border-right: #FBFF0F 6px solid;border-bottom: #FBFF0F 6px solid;border-left: #FBFF0F 6px solid; \n    border-radius:6px;     ","text":{"align":"","color":""}}},{"conditionString":"Fields.Pre_Inspection_Result__c == Failed","conditions":{"group":[{"field":"Fields.Pre_Inspection_Result__c","id":"state-new-condition-80","operator":"==","type":"custom","value":"Failed"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":false,"isopen":true,"key":1,"label":"Failed PreInspection","name":"Failed PreInspection","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#FA0000","radius":"6px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"6"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #FA0000 6px solid;border-right: #FA0000 6px solid;border-bottom: #FA0000 6px solid;border-left: #FA0000 6px solid; \n    border-radius:6px;     ","text":{"align":"","color":""}}},{"conditionString":"Fields.Pre_Inspection_Result__c == Pass","conditions":{"group":[{"field":"Fields.Pre_Inspection_Result__c","id":"state-new-condition-71","operator":"==","type":"custom","value":"Pass"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":true,"isopen":true,"key":2,"label":"Passed PreInspection","name":"Passed PreInspection","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#4BCA81","radius":"6px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"6"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #4BCA81 6px solid;border-right: #4BCA81 6px solid;border-bottom: #4BCA81 6px solid;border-left: #4BCA81 6px solid; \n    border-radius:6px;     ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[{"language":"English","subtype":"UploadDocs","type":"ProjectSummary"}],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"none","type":"around"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"MilestonePreInspection","xmlObject":{"apiVersion":48,"isExplicitImport":false,"masterLabel":"MilestonePreInspection","runtimeNamespace":"vlocity_cmt","targetConfigs":"PHRhcmdldENvbmZpZyB0YXJnZXRzPSJsaWdodG5pbmdDb21tdW5pdHlfX0RlZmF1bHQiPg0KICAgICAgPHByb3BlcnR5IG5hbWU9InJlY29yZElkIiB0eXBlPSJTdHJpbmciLz4NCiAgICA8L3RhcmdldENvbmZpZz4=","targets":{"target":["lightning__AppPage","lightning__HomePage","lightning__RecordPage","lightningCommunity__Page","lightningCommunity__Default"]}},"Id":"a5V03000000Y6rREAS","vlocity_cmt__GlobalKey__c":"MilestonePreInspection/Dab/2/1643827878096","vlocity_cmt__IsChildCard__c":true};
  export default definition