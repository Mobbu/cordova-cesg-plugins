package com.mobbu.cordova.cesg.masksnapshot;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;

import android.view.WindowManager;

public class MaskSnapshot extends CordovaPlugin {

    @Override
    
    /**
     * @param cordova The context of the main Activity.
     * @param webView The associated CordovaWebView.
     */
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    	super.initialize(cordova, webView);
    	cordova.getActivity().getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
    }
    
}