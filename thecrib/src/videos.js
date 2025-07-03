const videos = [
    {
        id: "1-0",
        videoId:"509236733",
        videoName: "Sport Power AD",
        previewImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8fDB8fHww"
    },
    {
        id: "1-1",
        videoId:"584150509",
        videoName: "Brand Raised",
        previewImage: "https://images.unsplash.com/photo-1521675333836-36e707ac1d20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZSUyMGJyYW5jaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: "1-2",
        videoId:"545748940",
        videoName: "Minimal Rotation",
        previewImage: "https://images.unsplash.com/photo-1571736282819-887293fec70d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm90YXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
        id: "1-3",
        videoId:"545748940",
        videoName: "Minimal Rotation",
        previewImage: "https://images.unsplash.com/photo-1571736282819-887293fec70d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm90YXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
        id: "1-4",
        videoId:"545748940",
        videoName: "Minimal Rotation",
        previewImage: "https://images.unsplash.com/photo-1571736282819-887293fec70d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm90YXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
        id: "1-5",
        videoId:"545748940",
        videoName: "Minimal Rotation",
        previewImage: "https://images.unsplash.com/photo-1571736282819-887293fec70d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm90YXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
        id: "2-0",
        videoId:"509236733",
        videoName: "Sport Power AD",
        previewImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8fDB8fHww"
    },
    {
        id: "2-1",
        videoId:"545748940",
        videoName: "Minimal Rotation",
        previewImage: "https://images.unsplash.com/photo-1571736282819-887293fec70d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm90YXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
        id: "2-2",
        videoId:"584150509",
        videoName: "Brand Raised",
        previewImage: "https://images.unsplash.com/photo-1521675333836-36e707ac1d20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZSUyMGJyYW5jaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: "2-3",
        videoId:"584150509",
        videoName: "Brand Raised",
        previewImage: "https://images.unsplash.com/photo-1521675333836-36e707ac1d20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZSUyMGJyYW5jaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: "2-4",
        videoId:"584150509",
        videoName: "Brand Raised",
        previewImage: "https://images.unsplash.com/photo-1521675333836-36e707ac1d20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZSUyMGJyYW5jaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: "3-0",
        videoId:"509236733",
        videoName: "Sport Power AD",
        previewImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8fDB8fHww"
    },
    {
        id: "3-1",
        videoId:"545748940",
        videoName: "Minimal Rotation",
        previewImage: "https://images.unsplash.com/photo-1571736282819-887293fec70d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm90YXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
        id: "3-2",
        videoId:"584150509",
        videoName: "Brand Raised",
        previewImage: "https://images.unsplash.com/photo-1521675333836-36e707ac1d20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZSUyMGJyYW5jaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: "3-3",
        videoId:"545748940",
        videoName: "Minimal Rotation",
        previewImage: "https://images.unsplash.com/photo-1571736282819-887293fec70d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm90YXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
        id: "3-4",
        videoId:"545748940",
        videoName: "Minimal Rotation",
        previewImage: "https://images.unsplash.com/photo-1571736282819-887293fec70d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm90YXRpb258ZW58MHx8MHx8fDA%3D"
    }, {
        id: "3-5",
        videoId:"545748940",
        videoName: "Minimal Rotation",
        previewImage: "https://images.unsplash.com/photo-1571736282819-887293fec70d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm90YXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
        id: "4-0",
        videoId:"584150509",
        videoName: "Brand Raised",
        previewImage: "https://images.unsplash.com/photo-1521675333836-36e707ac1d20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZSUyMGJyYW5jaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: "4-1",
        videoId:"584150509",
        videoName: "Brand Raised",
        previewImage: "https://images.unsplash.com/photo-1521675333836-36e707ac1d20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZSUyMGJyYW5jaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: "4-2",
        videoId:"584150509",
        videoName: "Brand Raised",
        previewImage: "https://images.unsplash.com/photo-1521675333836-36e707ac1d20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZSUyMGJyYW5jaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: "4-3",
        videoId:"584150509",
        videoName: "Brand Raised",
        previewImage: "https://images.unsplash.com/photo-1521675333836-36e707ac1d20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZSUyMGJyYW5jaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: "4-4",
        videoId:"584150509",
        videoName: "Brand Raised",
        previewImage: "https://images.unsplash.com/photo-1521675333836-36e707ac1d20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZSUyMGJyYW5jaHxlbnwwfHwwfHx8MA%3D%3D"
    },
   

]

export default videos;