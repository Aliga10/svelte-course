import { json, error } from "@sveltejs/kit";
import type { RequestEvent } from "@sveltejs/kit"; // Impor tipe data di sini
import { comments } from "$lib/comments";

export function GET(requestEvent: RequestEvent) { // Tambahkan tipe data ke parameter
    const { params } = requestEvent;
    const { commentsId } = params;
    
    const comment = comments.find(c => c.id === parseInt(commentsId||"0"));  
    
    if (!comment) {
        throw error(404, "Comment not found");
    }

    return json(comment);
}

export async function PATCH(requestEvent: RequestEvent) { // Tambahkan tipe data ke parameter
    const { params, request } = requestEvent;
    const { commentsId } = params;
    const { text } = await request.json();
    
    const comment = comments.find(c => c.id === parseInt(commentsId||"0"));
    
    if (!comment) {
        throw error(404, "Comment not found");
    }

    comment.text = text;
    return json(comment);
}

export function DELETE(requestEvent: RequestEvent) { // Tambahkan tipe data ke parameter
    const { params } = requestEvent;
    const { commentsId } = params;   
    const deletetedComments = comments.find (c => c.id === parseInt(commentsId||"0"));
    const index = comments.findIndex(c => c.id === parseInt(commentsId||"0"));
    comments.splice(index, 1);     
    if (!deletetedComments) {
        throw error(404, "Comment not found");
    }
    return json(deletetedComments);
}