import { GetHistory } from '../Stepmania/Stepmaniax.js';
import { historyEmbed, scoreFeedEmbed } from './Embeds.js';
import scoreFeedElement from '../Stepmania/Classes/ScoreFeedElement.js';
import register from '../config.js';

/** command types:
 * 1: SUB_COMMAND
 * 2: SUB_COMMAND_GROUP
 * 3: STRING
 * 4: INTEGER
 * 5: BOOLEAN
 * 6: USER
 * 7: CHANNEL
 * 8: ROLE
 * 9: MENTIONABLE
 * 10: NUMBER
 * 11: ATTACHMENT
 */


export const commands = [
    {
        name: 'updatehistory',
        description: 'Updates history',
        options: [
            {
                name: 'task',
                description: 'The task to add',
                type: 3,            
                required: true
            }
        ]
    },
    // {
    //     name: 'addtask',
    //     description: 'Adds a task to the to-do list',
    //     options: [
    //         {
    //             name: 'task',
    //             description: 'The task to add',
    //             type: 3,
    //             required: true
    //         }
    //     ]
    // },
    // {
    //     name: 'selectlist',
    //     description: 'Selects a list to modify',
    //     options: [
    //         {
    //             name: 'listid',
    //             description: 'The id of the list',
    //             type: 3,
    //             required: true
    //         }
    //     ]
    // },
    // {
    //     name: 'removetask',
    //     description: 'Deletes a task from the to-do list',
    //     options: [
    //         {
    //             name: 'taskid',
    //             description: 'The id of the task',
    //             type: 4,
    //             required: true
    //         }
    //     ]
    // },
    // {
    //     name: 'assigntask',
    //     description: "Assigns a task to a user",
    //     options: [
    //         {
    //             name: 'taskid',
    //             description: 'The task number from the top',
    //             type: 4,
    //             required: true
    //         },
    //         {
    //             name: 'userid',
    //             description: 'The id of the user',
    //             type: 3,
    //             required: false
    //         }
    //     ]
    // },
    // {
    //     name: 'unassigntask',
    //     description: "Unassigns a task from a user",
    //     options: [
    //         {
    //             name: 'taskid',
    //             description: 'The task number from the top',
    //             type: 4,
    //             required: true
    //         }
    //     ]
    // }
];


export async function handleCommand(command){
    switch (command.commandName) {
        
        
        case 'updatehistory':
           
            break;




        // case 'addtask':
        //     const task = ir.options.getString('task');
        //     addtask(ir, task);
        //     break;

        // case 'createlist':
        //     createlist(ir);    
        //     break;

        // case 'selectlist':
        //     const listid = ir.options.getString('listid');
        //     selectlist(ir, listid);
        //     break;
            
        // case 'removetask':
        //     removetask(ir, ir.options.getInteger('taskid'));
        //     break;

        // case 'assigntask':
        //     const taskid = ir.options.getInteger('taskid');
        //     const userid = ir.options.getString('userid');
        //     assigntask(ir, taskid, userid);
        //     break;
        
        // case 'unassigntask':
        //     const untaskid = ir.options.getInteger('taskid');
        //     unassigntask(ir, untaskid);
        //     break;

        default:
            break;
    }

}