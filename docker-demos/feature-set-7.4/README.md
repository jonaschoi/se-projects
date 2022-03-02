# Liferay DXP 7.4 Feature Set
This demo bundle contains the Feature Set Demo built on Liferay DXP 7.3 SP1.

## Directories Listing
### elasticsearch
This directory contains the script to install the necessary Elasticsearch plugins and elasticsearch.yml used. *If only running the demo bundle, there is no need to modify this directory.*
### mount
This directory contains the mappings to add demo info/data into the bundle. Add plugins that need to be persisted across restarts and volume clears according to the directory structure here. For full explanation, please consult the [Liferay DXP Docker Hub page](https://hub.docker.com/r/liferay/dxp).
### mysql
This directory contains the SQL dump file for the database and the my.cnf used. *If only running the demo bundle, there is no need to modify this directory.*

## Actions to perform before demoing
- Deploy and verify any plugins planned on being shown
- Themes (optional)
- Change logo
- Check roles/permissions of users
- SalesForce Demo credentials

## Items that can be demo'd with some prep
- Themes
- Multi-sites
- Roles
- Pages/Content Management Systems
- Workflow
- Documents & Media
- Search
- Graphs/Dashboarding

## Included plugins
- Billboard Graph Fragments
- SE Toolbox Fragments
- Salesforce Demo Portlet
- Commerce (enabled)
- Sharepoint SOAP Connector

## 7.3 Features to show
- Stylebooks
- App Builder
- Content Mapping (7.2)

## Baseline Demo Script
1. Theme types
	- Show responsive nature
		- Highlight how the page layout changes to be reflective of the size and nature of the interaction (mouse/keyboard vs finger)
	- Show live sites that use Liferay
2. Login as Bruno
	- Highlight themes again with the videob background
	- Themes in Liferay can be very varied
3. Show Admin view and highlight Roles/Permissions
	- Top bar
	- Page editing
	- Control Panel
4. Create a Content Page
	- Add various pieces of content
		- Sections
			- Show on the fly layouts of sections
		- Paragraph
		- Button
		- Image
		- Widgets (Portlets)
			- Web Content
5. Content Creation
	- Add filler text into Paragraph
		- Discuss Alloy Editor and design philosophy of the editor
	- Add Image
6. Content Mapping
	- Map an Image and Paragraph type of content from a Web Content
	- Content comes from the pre-made web content, and is styled to fit the current page
7. Web Content Creation/Workflow
	- Log out as Bruno, login as Richard
		- Highlight the controls/settings that Richard has access to
	- Have a Web Content Folder setup with a Workflow
	- Discuss how we just made live changes, and we might want a review process, or some other processes
	- Create a Web Content in the Workflow folder
		- Show metadata, go live date, related docs, etc..
		- Show how it doesn't show up until approved
8. Workflow Approvals
	- Log in as Michelle
		- Show Michelle's controls and the notification badge
	- Approve workflow
		- Assign to herself, add comments, @mentions
		- Show Audit trail, and status.
	- Content is now available for use.
9. Documents & Media
	- Drag & Drop several documents into a Documents & Media widget
	- Discuss file types, and content indexing
		- If uploaded a PDF or DOC show that it's available for viewing after a few minutes
10. Search
	- Use Search bar to search for contents of the documents uploaded
	- Discuss facets and filtering
	- Discuss Roles/Permissions in relation to search
	- If asked, talk about underlying search technology of Elasticsearch
		- Also can do Solr, for now
	
## Items that can be demo'd with much more prep
- Elasticsearch
	- Synonyms
	- Search tuning
- Microservices
- Integrations
- Themes with corporate colors.
