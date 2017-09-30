/**
 * 
 */

 function itemToPlugin(context, item, name){
   if (Array.isArray(item)){

   }
   return ;
 }
 class EntryOptionPlugin{
   apply(compiler){
     compiler.plugin("entry-option", (context, entry)=>{
       if (typeof entry === "string" || Array.isArray(entry)){
        copiler.apply(itemToPlugin(context, entry, "main"));
       }
       else if (typeof entry === "object"){
         Object.keys(entry).forEach(name=>compiler.apply(itemToPlugin(context, entry[name], name)));
       }
       else if (typeof entry === "function"){
        //  compiler.apply();
       }
       return true;
     });
   }
 };

 module.exports = EntryOptionPlugin;