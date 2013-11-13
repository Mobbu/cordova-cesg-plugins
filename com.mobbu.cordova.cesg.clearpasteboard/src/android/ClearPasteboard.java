package com.mobbu.cordova.cesg.clearpasteboard;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;

import android.content.ClipData;
import android.text.ClipboardManager;
import android.content.Context;

/**
 * This class echoes a string called from JavaScript.
 */
@SuppressWarnings("deprecation")
public class ClearPasteboard extends CordovaPlugin {

    @Override
    /**
     * Called when the system is about to start resuming a previous activity.
     *
     * @param multitasking                Flag indicating if multitasking is turned on for app
     */
    public void onPause(boolean multitasking) {
    	Context context = this.cordova.getActivity().getApplicationContext();
    	
    	ClipboardManager clipboard = (ClipboardManager) context.getSystemService(Context.CLIPBOARD_SERVICE);
    	clipboard.setText(null);
    }
    
}