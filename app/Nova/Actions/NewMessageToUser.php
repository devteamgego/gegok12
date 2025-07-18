<?php

namespace App\Nova\Actions;

use Illuminate\Bus\Queueable;
use Laravel\Nova\Actions\Action;
use Illuminate\Support\Collection;
use Laravel\Nova\Fields\ActionFields;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewMessage;
use App\Notifications\Message;

class NewMessageToUser extends Action
{
    use InteractsWithQueue, Queueable, SerializesModels;

        /**
     * Get the displayable name of the action.
     *
     * @return string
     */
    public function name()
    {
        return 'Send Mail To User';
    }
    /**
     * Perform the action on the given models.
     *
     * @param  \Laravel\Nova\Fields\ActionFields  $fields
     * @param  \Illuminate\Support\Collection  $models
     * @return mixed
     */
    public function handle(ActionFields $fields, Collection $users)
    {
        //
        $currentuser = auth()->user();
        foreach ($users as $user)
        { 
            if(env('MAIL_STATUS') == 'on')
            {
                $message = (new NewMessage($fields->subject,$fields->message,$user))->onQueue('email');
                Mail::to($user->email)->queue($message);
            }        
        }
    }

    /**
     * Get the fields available on the action.
     *
     * @return array
     */
    public function fields()
    {
         return [
            Text::make('Subject','subject')
              ->rules('required'),
           
            Textarea::make('Message','message')
              ->rules('required'),
        ];
    }
}
