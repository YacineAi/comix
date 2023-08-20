const axios = require("axios");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SB_URL, process.env.SB_KEY, {
  auth: { persistSession: false },
});
const Botly = require("botly");
const botly = new Botly({
  accessToken: process.env.PAGE_ACCESS_TOKEN,
  notificationType: Botly.CONST.REGULAR,
  FB_URL: "https://graph.facebook.com/v2.6/",
});

/* ----- DB Qrs ----- */
async function createUser(user) {
    const { data, error } = await supabase.from("users").insert([user]);
  
    if (error) {
      throw new Error("Error creating user : ", error);
    } else {
      return data;
    }
  }
  
  async function updateUser(id, update) {
    const { data, error } = await supabase
      .from("users")
      .update(update)
      .eq("uid", id);
  
    if (error) {
      throw new Error("Error updating user : ", error);
    } else {
      return data;
    }
  }
  
  async function userDb(userId) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("uid", userId);
  
    if (error) {
      console.error("Error checking user:", error);
    } else {
      return data;
    }
  }
  
  async function getHot() {
    const { data, error } = await supabase
      .from("users")
      .select("mid")
      .neq("mid", null)
  
    if (error) {
      console.error("Error checking user:", error);
    } else {
      return data;
    }
  }
  /* ----- HANDELS ----- */

const messages = () => {

};

const postbacks = () => {

};
exports.messages = messages;
exports.postbacks = postbacks;